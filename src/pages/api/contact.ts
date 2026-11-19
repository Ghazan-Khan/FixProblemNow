import type { APIRoute } from 'astro';
import {
  cleanText,
  clientIp,
  forbiddenOrigin,
  isAllowedOrigin,
  isEmail,
  jsonResponse,
  rateLimit,
  tooManyRequests,
} from '../../lib/security';

export const prerender = false;

const TOPICS = new Set([
  'general',
  'guide-feedback',
  'correction',
  'accessibility',
  'privacy',
  'partnership',
]);

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
  guide?: unknown;
  website?: unknown;
  startedAt?: unknown;
}

function configuredChannels(): string[] {
  const channels: string[] = [];
  if (
    process.env.RESEND_API_KEY &&
    process.env.CONTACT_TO_EMAIL &&
    process.env.CONTACT_FROM_EMAIL
  ) {
    channels.push('email');
  }
  if (process.env.CONTACT_WEBHOOK_URL) channels.push('webhook');
  return channels;
}

async function sendWithResend(input: {
  name: string;
  email: string;
  topic: string;
  message: string;
  guide: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY as string;
  const to = process.env.CONTACT_TO_EMAIL as string;
  const from = process.env.CONTACT_FROM_EMAIL as string;

  const text = [
    `New FixProblemNow contact form message`,
    '',
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Topic: ${input.topic}`,
    input.guide ? `Guide: ${input.guide}` : '',
    '',
    input.message,
  ]
    .filter(Boolean)
    .join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: input.email,
      subject: `[FixProblemNow] ${input.topic} message`,
      text,
    }),
  });

  if (!response.ok) {
    throw new Error(`Email delivery failed with status ${response.status}`);
  }
}

async function sendWithWebhook(input: {
  name: string;
  email: string;
  topic: string;
  message: string;
  guide: string;
}): Promise<void> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (process.env.CONTACT_WEBHOOK_SECRET) {
    headers.Authorization = `Bearer ${process.env.CONTACT_WEBHOOK_SECRET}`;
  }

  const response = await fetch(process.env.CONTACT_WEBHOOK_URL as string, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      source: 'fixproblemnow.com',
      submittedAt: new Date().toISOString(),
      ...input,
    }),
  });

  if (!response.ok) {
    throw new Error(`Webhook delivery failed with status ${response.status}`);
  }
}

export const GET: APIRoute = async () => {
  const channels = configuredChannels();
  return jsonResponse({
    ok: true,
    configured: channels.length > 0,
    channels,
    message:
      channels.length > 0
        ? 'The contact form is connected to a delivery channel on this deployment.'
        : 'No contact delivery channel is configured on this deployment. The form will tell visitors that no message was sent.',
  });
};

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (!isAllowedOrigin(request)) return forbiddenOrigin();

  const limit = rateLimit(`contact:${clientIp(request, clientAddress)}`, 5, 10 * 60_000);
  if (!limit.allowed) return tooManyRequests(limit);

  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return jsonResponse({ ok: false, error: 'Please submit the form as JSON.' }, 415);
  }

  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > 20_000) {
    return jsonResponse({ ok: false, error: 'The message is too large.' }, 413);
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse({ ok: false, error: 'The form data could not be read.' }, 400);
  }

  const name = cleanText(payload.name, 80);
  const email = cleanText(payload.email, 254);
  const topic = cleanText(payload.topic, 40);
  const message = cleanText(payload.message, 5000);
  const guide = cleanText(payload.guide, 160);
  const website = cleanText(payload.website, 200);
  const startedAt = Number(payload.startedAt ?? 0);

  // Honeypot: bots that fill hidden fields receive an ordinary-looking response
  // but nothing is delivered.
  if (website) {
    return jsonResponse({ ok: true, message: 'Message received.' }, 201);
  }

  // A form completed in under two seconds is almost certainly automated.
  if (Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < 2000) {
    return jsonResponse({ ok: false, error: 'Please take a moment to complete the form.' }, 400);
  }

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = 'Enter your name (at least 2 characters).';
  if (!isEmail(email)) errors.email = 'Enter a valid email address.';
  if (!TOPICS.has(topic)) errors.topic = 'Choose a contact topic.';
  if (message.length < 20) errors.message = 'Please describe the issue in at least 20 characters.';
  if (message.length >= 5000) errors.message = 'Please keep the message under 5,000 characters.';

  if (Object.keys(errors).length > 0) {
    return jsonResponse({ ok: false, error: 'Please correct the highlighted fields.', errors }, 422);
  }

  const channels = configuredChannels();
  if (channels.length === 0) {
    return jsonResponse(
      {
        ok: false,
        error:
          'This deployment has not been configured to receive contact messages. No message was sent. The site owner needs to set the documented email or webhook environment variables.',
        code: 'delivery_not_configured',
      },
      503,
    );
  }

  const input = { name, email, topic, message, guide };

  try {
    if (channels.includes('email')) {
      await sendWithResend(input);
    } else {
      await sendWithWebhook(input);
    }

    return jsonResponse(
      {
        ok: true,
        message: 'Your message was delivered to the site team.',
      },
      201,
    );
  } catch (error) {
    // Never log the message body or email address.
    console.error('Contact delivery failed:', error instanceof Error ? error.message : 'unknown error');
    return jsonResponse(
      {
        ok: false,
        error:
          'The message could not be delivered because the mail service failed. No message was sent. Please try again later.',
        code: 'delivery_failed',
      },
      502,
    );
  }
};
