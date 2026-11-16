import type { APIRoute } from 'astro';
import { appendFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import {
  CATEGORY_SLUGS,
  cleanText,
  clientIp,
  jsonResponse,
  rateLimit,
  tooManyRequests,
} from '../../lib/security';

export const prerender = false;

interface FeedbackPayload {
  guide?: unknown;
  category?: unknown;
  helpful?: unknown;
}

function hasWebhook(): boolean {
  return Boolean(process.env.FEEDBACK_WEBHOOK_URL);
}

async function deliverWebhook(record: Record<string, unknown>): Promise<void> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (process.env.FEEDBACK_WEBHOOK_SECRET) {
    headers.Authorization = `Bearer ${process.env.FEEDBACK_WEBHOOK_SECRET}`;
  }
  const response = await fetch(process.env.FEEDBACK_WEBHOOK_URL as string, {
    method: 'POST',
    headers,
    body: JSON.stringify(record),
  });
  if (!response.ok) {
    throw new Error(`Feedback webhook failed with status ${response.status}`);
  }
}

async function appendLocal(record: Record<string, unknown>): Promise<void> {
  const dir = process.env.FEEDBACK_LOG_DIR || join(process.cwd(), '.data');
  await mkdir(dir, { recursive: true });
  await appendFile(join(dir, 'feedback.jsonl'), `${JSON.stringify(record)}\n`, 'utf8');
}

export const GET: APIRoute = async () => {
  return jsonResponse({
    ok: true,
    configured: true,
    storage: hasWebhook() ? 'webhook' : 'local-jsonl',
    message: hasWebhook()
      ? 'Feedback is forwarded to the configured webhook.'
      : 'Feedback is appended to a local JSONL file on the server. This requires a persistent server filesystem.',
  });
};

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const limit = rateLimit(`feedback:${clientIp(request, clientAddress)}`, 20, 10 * 60_000);
  if (!limit.allowed) return tooManyRequests(limit);

  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return jsonResponse({ ok: false, error: 'Please submit feedback as JSON.' }, 415);
  }

  let payload: FeedbackPayload;
  try {
    payload = (await request.json()) as FeedbackPayload;
  } catch {
    return jsonResponse({ ok: false, error: 'The feedback could not be read.' }, 400);
  }

  const guide = cleanText(payload.guide, 140);
  const category = cleanText(payload.category, 60);

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(guide)) {
    return jsonResponse({ ok: false, error: 'Unknown guide reference.' }, 422);
  }
  if (!CATEGORY_SLUGS.has(category)) {
    return jsonResponse({ ok: false, error: 'Unknown category.' }, 422);
  }
  if (typeof payload.helpful !== 'boolean') {
    return jsonResponse({ ok: false, error: 'Feedback must be a yes or no value.' }, 422);
  }

  const record = {
    guide,
    category,
    helpful: payload.helpful,
    receivedAt: new Date().toISOString(),
  };

  try {
    if (hasWebhook()) {
      await deliverWebhook(record);
    } else {
      await appendLocal(record);
    }
    return jsonResponse({ ok: true, message: 'Feedback recorded.' }, 201);
  } catch (error) {
    console.error(
      'Feedback storage failed:',
      error instanceof Error ? error.message : 'unknown error',
    );
    return jsonResponse(
      {
        ok: false,
        error: 'Feedback could not be stored on this deployment. No feedback was recorded.',
        code: 'storage_failed',
      },
      503,
    );
  }
};
