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
