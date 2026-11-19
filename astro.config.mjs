import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import { redirects } from './redirects.mjs';

// Primary production origin. Override with SITE_URL when building a preview
// deployment so canonical URLs and social metadata point at the right host.
const site = process.env.SITE_URL || 'https://fixproblemnow.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  // Hostinger terminates TLS and proxies to the Node server without forwarding
  // the public host, so Astro's built-in origin check cannot match same-origin
  // form posts (it compares against the internal proxy URL). The API routes do
  // their own allowlist check in src/lib/security.ts instead.
  security: { checkOrigin: false },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/search/') &&
        !page.includes('/api/') &&
        !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  redirects,
  markdown: {
    rehypePlugins: [['./src/lib/rehype-callouts.mjs', {}]],
    shikiConfig: { theme: 'github-light', wrap: true },
  },
  build: {
    format: 'directory',
  },
});
