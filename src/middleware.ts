import { defineMiddleware } from 'astro:middleware';

const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "img-src 'self' data:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join('; ');

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  const headers = new Headers(response.headers);
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  );
  headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  headers.set('Content-Security-Policy', CSP);

  if (context.url.protocol === 'https:') {
    headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }

  if (context.url.pathname.startsWith('/search/')) {
    headers.set('X-Robots-Tag', 'noindex, follow');
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
});
