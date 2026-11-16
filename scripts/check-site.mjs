/**
 * Post-build site checker.
 *
 * Verifies the generated HTML without a browser:
 *  - every internal link and in-page anchor resolves
 *  - canonicals are present, unique, and match the built path
 *  - titles and descriptions are present and unique
 *  - JSON-LD blocks are valid JSON
 *  - sitemap URLs match indexable pages and every indexable page is listed
 *  - redirect source/target pairs resolve to a known page
 *  - the client search index points at real pages
 *
 * Run with: node scripts/check-site.mjs
 * Exits with code 1 when an error is found. Warnings do not fail the build.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.cwd();
const clientDir = join(root, 'dist', 'client');
const errors = [];
const warnings = [];

const fail = (message) => errors.push(message);
const warn = (message) => warnings.push(message);

if (!existsSync(clientDir)) {
  console.error('dist/client is missing. Run `npm run build` first.');
  process.exit(1);
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const allFiles = walk(clientDir);
const htmlFiles = allFiles.filter((file) => file.endsWith('.html'));
const htmlByPath = new Map();
const fileToUrl = new Map();

function urlForHtml(file) {
  const rel = relative(clientDir, file).split(sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel}`;
}

function decodeEntities(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function getAttr(tag, name) {
  const match = tag.match(new RegExp(`${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i'));
  return match ? decodeEntities(match[2] ?? match[3] ?? '') : null;
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const url = urlForHtml(file);
  htmlByPath.set(url, html);
  fileToUrl.set(file, url);
}

// Assets available as direct requests.
const assetPaths = new Set(
  allFiles
    .filter((file) => !file.endsWith('.html'))
    .map((file) => `/${relative(clientDir, file).split(sep).join('/')}`),
);

function resolvePath(pathname) {
  // Returns the HTML file for a route path, or null.
  const clean = pathname.replace(/\/+$/, '') || '/';
  const candidates = clean === '/' ? ['/'] : [clean + '/', clean];
  for (const candidate of candidates) {
    if (htmlByPath.has(candidate)) return htmlByPath.get(candidate);
  }
  return null;
}

function hasAnchor(html, anchor) {
  const decoded = decodeURIComponent(anchor);
  const escaped = decoded.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(?:id|name)\\s*=\\s*["']${escaped}["']`, 'i').test(html);
}

const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();
const sitemapUrls = [];

for (const [url, html] of htmlByPath) {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? decodeEntities(titleMatch[1]).replace(/\s+/g, ' ').trim() : '';
  if (!title) {
    fail(`${url}: missing <title>`);
  } else {
    if (titles.has(title)) fail(`${url}: duplicate title also used by ${titles.get(title)}`);
    else titles.set(title, url);
    if (title.length < 15) warn(`${url}: title is only ${title.length} characters`);
    if (title.length > 75) warn(`${url}: title is ${title.length} characters (over 75)`);
  }

  const descriptionTag = html.match(/<meta\s+[^>]*name=["']description["'][^>]*>/i);
  const description = descriptionTag ? getAttr(descriptionTag[0], 'content') ?? '' : '';
  if (!description) {
    fail(`${url}: missing meta description`);
  } else {
    if (descriptions.has(description)) {
      fail(`${url}: duplicate description also used by ${descriptions.get(description)}`);
    } else {
      descriptions.set(description, url);
    }
    if (description.length < 50) warn(`${url}: description is only ${description.length} characters`);
    if (description.length > 180) warn(`${url}: description is ${description.length} characters (over 180)`);
  }

  const canonicalTag = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*>/i);
  const canonical = canonicalTag ? getAttr(canonicalTag[0], 'href') ?? '' : '';
  if (!canonical) {
    fail(`${url}: missing canonical link`);
  } else {
    if (canonicals.has(canonical)) {
      fail(`${url}: duplicate canonical also used by ${canonicals.get(canonical)}`);
    } else {
      canonicals.set(canonical, url);
    }
    const canonicalPath = canonical.replace(/^https?:\/\/[^/]+/i, '');
    const expected = url === '/404/' ? '/404.html' : url;
    if (canonicalPath.replace(/\/+$/, '') !== expected.replace(/\/+$/, '')) {
      fail(`${url}: canonical points to ${canonicalPath}, expected ${expected}`);
    }
  }

  const robotsTag = html.match(/<meta\s+[^>]*name=["']robots["'][^>]*>/i);
  const robots = robotsTag ? getAttr(robotsTag[0], 'content') ?? '' : '';
  if (url === '/search/' && !/noindex/i.test(robots)) {
    fail('/search/: search page must carry a noindex robots meta tag');
  }
  if (url === '/404/' && !/noindex/i.test(robots)) {
    fail('/404/: error page must carry a noindex robots meta tag');
  }

  const h1Count = (html.match(/<h1[\s>]/gi) ?? []).length;
  if (h1Count !== 1) warn(`${url}: expected exactly one h1, found ${h1Count}`);

  for (const match of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      fail(`${url}: invalid JSON-LD (${error.message})`);
    }
  }

  for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)) {
    const href = decodeEntities(match[1]);
    if (!href || href.startsWith('#') || /^(mailto|tel|sms|javascript):/i.test(href)) continue;
    if (/^https?:\/\//i.test(href)) continue;
    if (!href.startsWith('/')) continue;

    const [rawPath, rawHash] = href.split('#');
    const pathname = rawPath.split('?')[0];
    if (pathname.startsWith('/api/')) continue;

    if (!pathname || pathname === '/') {
      if (rawHash && !hasAnchor(html, rawHash)) {
        fail(`${url}: missing same-page anchor #${rawHash}`);
      }
      continue;
    }

    const targetHtml = resolvePath(pathname);
    if (!targetHtml) {
      if (!assetPaths.has(pathname)) {
        fail(`${url}: broken internal link ${href} (no built page or asset)`);
      }
      continue;
    }

    if (rawHash && !hasAnchor(targetHtml, rawHash)) {
      fail(`${url}: link ${href} targets missing anchor #${rawHash}`);
    }
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    if (!/\balt\s*=/i.test(tag)) {
      warn(`${url}: image without alt attribute: ${tag.slice(0, 100)}`);
    }
  }

  if (!/<html[^>]*lang=["'][^"']+["']/i.test(html)) {
    fail(`${url}: missing lang attribute on <html>`);
  }
}

// Sitemap coverage
const sitemapFile = join(clientDir, 'sitemap-0.xml');
if (existsSync(sitemapFile)) {
  const xml = readFileSync(sitemapFile, 'utf8');
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const pathname = match[1].replace(/^https?:\/\/[^/]+/i, '');
    sitemapUrls.push(pathname);
    if (!resolvePath(pathname)) fail(`sitemap: ${pathname} has no built HTML page`);
  }

  for (const url of htmlByPath.keys()) {
    if (url === '/404/' || url === '/search/') continue;
    const normalised = url.endsWith('/') ? url : `${url}/`;
    if (!sitemapUrls.includes(normalised)) warn(`sitemap: missing indexable page ${url}`);
  }
} else {
  fail('sitemap-0.xml is missing');
}

// Redirect targets
const redirectsFile = join(clientDir, '_redirects');
if (existsSync(redirectsFile)) {
  const lines = readFileSync(redirectsFile, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [from, to] = trimmed.split(/\s+/);
    if (!from || !to) continue;
    if (!from.startsWith('/') || !to.startsWith('/')) continue;
    if (!resolvePath(to.replace(/\/+$/, '') + '/')) {
      fail(`_redirects: ${from} -> ${to} has no built target page`);
    }
  }
} else {
  warn('_redirects is missing from the client output');
}

// Search index
const searchIndexFile = join(clientDir, 'search-index.json');
if (existsSync(searchIndexFile)) {
  let entries;
  try {
    entries = JSON.parse(readFileSync(searchIndexFile, 'utf8'));
  } catch (error) {
    fail(`search-index.json is not valid JSON (${error.message})`);
  }
  if (entries) {
    if (!Array.isArray(entries) || entries.length === 0) {
      fail('search-index.json contains no entries');
    } else {
      const seen = new Set();
      for (const entry of entries) {
        if (!entry.url || !resolvePath(entry.url)) {
          fail(`search-index.json: ${entry.url ?? '(missing url)'} does not resolve`);
        }
        if (!entry.title || !(entry.description || entry.summary)) {
          fail(`search-index.json: ${entry.url ?? '(missing url)'} is missing title or description`);
        }
        if (seen.has(entry.url)) fail(`search-index.json: duplicate entry ${entry.url}`);
        seen.add(entry.url);
      }
      if (entries.length < 30) warn(`search-index.json has only ${entries.length} entries`);
    }
  }
} else {
  fail('search-index.json is missing');
}

// robots.txt should advertise the sitemap
const robotsFile = join(clientDir, 'robots.txt');
if (existsSync(robotsFile)) {
  const robots = readFileSync(robotsFile, 'utf8');
  if (!/Sitemap:\s*https?:\/\//i.test(robots)) fail('robots.txt has no Sitemap directive');
} else {
  fail('robots.txt is missing');
}

const report = (label, items, limit = 25) => {
  if (items.length === 0) return;
  console.log(`\n${label} (${items.length}):`);
  for (const item of items.slice(0, limit)) console.log(`  - ${item}`);
  if (items.length > limit) console.log(`  ...and ${items.length - limit} more`);
};

console.log(`Checked ${htmlFiles.length} HTML pages and ${sitemapUrls.length} sitemap URLs.`);
report('Errors', errors);
report('Warnings', warnings);

if (errors.length > 0) {
  console.error(`\nSite check failed with ${errors.length} error(s).`);
  process.exit(1);
}

console.log('\nSite check passed.');
