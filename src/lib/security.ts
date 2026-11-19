import { categories } from '../data/categories';

export const CATEGORY_SLUGS = new Set(categories.map((category) => category.slug));

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();
const MAX_BUCKETS = 5000;

/**
 * Small in-memory fixed-window limiter. It protects a single server instance
 * from casual form abuse. Distributed deployments should also apply a limit at
 * the edge or use a shared store.
 */
export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    if (buckets.size > MAX_BUCKETS) {
      for (const [bucketKey, bucket] of buckets) {
        if (bucket.resetAt <= now) buckets.delete(bucketKey);
      }
    }
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, retryAfterSeconds: 0 };
  }

  existing.count += 1;
  if (existing.count > limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  return {
    allowed: true,
    remaining: Math.max(0, limit - existing.count),
    retryAfterSeconds: 0,
  };
}

export function clientIp(request: Request, fallback = 'unknown'): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get('cf-connecting-ip') ?? request.headers.get('x-real-ip');
  return realIp?.trim() || fallback;
}

export function jsonResponse(
  body: Record<string, unknown>,
  status = 200,
  extraHeaders: Record<string, string> = {},
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...extraHeaders,
    },
  });
}

export function tooManyRequests(result: RateLimitResult): Response {
  return jsonResponse(
    {
      ok: false,
      error: 'Too many requests. Please wait and try again.',
    },
    429,
    { 'Retry-After': String(result.retryAfterSeconds) },
  );
}

const SITE_ORIGINS = new Set([
  'https://fixproblemnow.com',
  'https://www.fixproblemnow.com',
  ...(process.env.SITE_URL
    ? (() => {
        try {
          return [new URL(process.env.SITE_URL as string).origin];
        } catch {
          return [];
        }
      })()
    : []),
]);

/**
 * Allowlist for browser form posts. Astro's built-in check is disabled in
 * astro.config.mjs because the production reverse proxy does not forward the
 * public host, which makes the framework compare the Origin header against the
 * wrong URL. This check only trusts this site's own origins (plus localhost for
 * development) and rejects everything else.
 */
export function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  // Non-browser clients (curl, server-to-server) omit Origin. They cannot ride
  // an existing browser session, and these endpoints require JSON bodies, so
  // they are handled by validation and rate limiting instead.
  if (!origin) return true;
  if (SITE_ORIGINS.has(origin)) return true;
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
}

export function forbiddenOrigin(): Response {
  return jsonResponse(
    { ok: false, error: 'This request came from an unexpected origin.' },
    403,
  );
}

export function cleanText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\r\n/g, '\n').replace(/\u0000/g, '').trim().slice(0, maxLength);
}

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) && value.length <= 254;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
