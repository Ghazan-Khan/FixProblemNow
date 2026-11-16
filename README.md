# FixProblemNow

FixProblemNow is an independent, static-first troubleshooting library for everyday technology problems. It ships with 38 published guides across 18 problem categories, a build-time search index, and two small server endpoints for contact messages and guide feedback.

The site is written for readers who want a clear starting point: what the problem looks like, which causes are worth checking, the safest order in which to try things, how to verify a fix, and when to stop. It does not request remote access, require an account, or claim to diagnose an individual device.

---

## What is included

- 38 guides covering computer, Windows, Mac, phone, Android, iPhone, Wi-Fi, router, printer, email, software, smart TV, streaming device, browser, gaming peripheral, storage, account and other technology problems.
- All required top-level pages, including `/problems/`, `/categories/`, `/how-it-works/`, `/about/`, `/contact/`, `/search/`, `/get-help/`, the policy pages, `/sitemap/`, and a custom 404 page.
- Structured guide content: symptoms, possible causes, preparation, safety notes, ordered steps, alternatives, verification, a stopping point, FAQs, related guides, sources, dates and feedback.
- A client-side search interface backed by a real build-time index, with category filters, result highlighting, autocomplete and keyboard navigation.
- Unique metadata, canonical URLs, Open Graph and Twitter cards, JSON-LD, an XML sitemap, `robots.txt`, noindex handling for search and 404 pages, and 301 redirects for legacy URLs.
- Contact and feedback endpoints with validation, honeypot and timing checks, in-memory rate limiting, and honest failure states when delivery is not configured.
- Accessibility-focused markup and interaction patterns, responsive CSS, reduced-motion support, and security headers.

The site currently has no analytics, advertising, affiliate links or third-party scripts. The legal pages describe that state rather than claiming compliance certifications.

---

## Requirements

- Node.js 22 or newer (developed and tested with Node 24.x).
- npm 10 or newer.

The project uses Astro 5, the `@astrojs/node` standalone adapter, and `@astrojs/sitemap`. It is plain TypeScript, CSS and Markdown; there is no separate frontend framework runtime.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Astro, normally `http://localhost:4321`.

To run the production build locally:

```bash
npm run build
npm run preview
```

`npm run preview` serves the built output. Run `npm run build` again after changing content or code.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Astro development server with hot reload. |
| `npm run check` | Run `astro check` for TypeScript, Astro and content diagnostics. |
| `npm run build` | Generate redirects, validate content, and build static pages plus the SSR entry. |
| `npm run preview` | Preview the last production build. |
| `npm run test:links` | Run the post-build site checker against `dist/client`. |
| `npm test` | Run `check`, then `build`, then the site checker. Use this before deployment. |
| `npm run assets` | Regenerate the favicons, brand images and category Open Graph images. |
| `npm run og` | Alias for `npm run assets`. |

`npm run build` triggers `prebuild`, which regenerates `public/_redirects` from `redirects.mjs`.

---

## Architecture

```text
.
├─ astro.config.mjs          Astro, site origin, trailing slashes, sitemap, redirects
├─ redirects.mjs             Single source of truth for legacy 301 redirects
├─ scripts/
│  ├─ generate-redirects.mjs Writes public/_redirects for platform hosting
│  ├─ generate-assets.mjs    Generates favicons, brand images and OG images
│  └─ check-site.mjs         Post-build link, metadata and index checker
├─ public/                   Static assets, robots.txt, _headers, generated redirects
├─ src/
│  ├─ components/            Header, footer, search, cards, FAQ, TOC, feedback, SEO
│  ├─ content/guides/        The 38 Markdown guides (flat files; category is metadata)
│  ├─ content.config.ts      Guide frontmatter schema and validation limits
│  ├─ data/categories.ts     18 category definitions, intros, FAQs and icons
│  ├─ data/site.ts           Site identity, navigation and API endpoints
│  ├─ layouts/               Base and long-form content layouts
│  ├─ lib/                   Content helpers, search, schema builders, security helpers
│  ├─ pages/                 Routes, category and guide templates, APIs, sitemap
│  ├─ styles/global.css      Design tokens, layout, components and responsive rules
│  └─ middleware.ts          Response security headers for SSR and API routes
└─ dist/
   ├─ client/                Pre-rendered HTML and static assets
   └─ server/                Node standalone entry for the contact/feedback APIs
```

### Rendering model

Pages are pre-rendered at build time. The contact and feedback endpoints are on-demand server routes. The Node adapter produces a standalone server entry at `dist/server/entry.mjs`; the static output is in `dist/client`.

URLs use trailing slashes (`trailingSlash: 'always'`). API clients must call `/api/contact/` and `/api/feedback/` with the trailing slash. A request without it receives a 301, which can cause a POST body to be lost.

---

## Content model

Guides live in `src/content/guides/*.md`. The filename is the guide slug, and the category comes from frontmatter. A guide at `src/content/guides/printer-offline.md` with `category: printer-problems` is published at `/printer-problems/printer-offline/`.

The schema in `src/content.config.ts` enforces:

| Field | Requirement |
| --- | --- |
| `title` | Guide headline, at least 10 characters. |
| `seoTitle` | Optional search/social title; falls back to `title`. |
| `description` | Meta description, 50–180 characters. |
| `summary` | Intro summary, at least 80 characters. |
| `quickAnswer` | Short direct answer, at least 80 characters. |
| `category` | One of the 18 category slugs. |
| `keywords` | Search terms and common wording. |
| `symptoms` | At least 3 observable symptoms. |
| `causes` | At least 3 `{ title, detail }` possibilities, written as possibilities rather than diagnoses. |
| `prep` | What the reader needs before starting. |
| `safetyNotes` | Data-loss, electrical, heat, liquid or account-safety warnings. |
| `verification` | How to prove the problem is fixed. |
| `whenToStop` | When to stop and involve a professional or the account provider. |
| `faqs` | At least 3 `{ q, a }` entries. |
| `sources` | At least 1 `{ label, url }` official reference. |
| `related` | Guide IDs (filenames) to show as related reading. |
| `published`, `updated` | Real dates in `YYYY-MM-DD` form. Do not stagger dates to look older. |
| `featured` | Boolean; featured guides are ordered first. |
| `difficulty` | `Beginner`, `Intermediate` or `Advanced`. |
| `time` | Human-readable estimate, for example `15–30 minutes`. |
| `risk` | `Low`, `Moderate` or `High`. |
| `draft` | Drafts are excluded from pages, listings, search and the sitemap. |

### Writing a guide

1. Create `src/content/guides/<slug>.md`.
2. Fill in every frontmatter field. Use a real `published` date and update `updated` when you materially change the guide.
3. Start the body with a short framing section, then use `##` headings and numbered `###` steps for the procedure.
4. Keep steps ordered from least disruptive to most disruptive. Put destructive actions late, with a backup warning first.
5. Include an alternatives section for what to try if the first path does not work, for example `## If it still will not connect`.
6. Add callouts where a warning or tip is genuinely useful:

   ```markdown
   > [!WARNING]
   > Back up your files before continuing.
   ```

   Supported labels are `NOTE`, `TIP`, `IMPORTANT` and `WARNING`.
7. Add sources to official manufacturer, operating-system or provider documentation. Do not cite scraped content, forums or invented references.
8. Run `npm test`. The content schema and post-build checker will fail on missing fields, broken internal links or malformed metadata.

### Adding a category

1. Add the category to `src/data/categories.ts` with a unique slug, name, navigation label, icon, tagline, meta description, intro, coverage list, FAQs and related categories.
2. Add an icon to `src/components/Icon.astro` if the chosen icon does not exist.
3. Run `npm run assets` to generate the category Open Graph image.
4. Add at least one guide with that category.
5. Run `npm test`.

### Categories

`computer-problems`, `windows-problems`, `mac-problems`, `phone-problems`, `android-problems`, `iphone-problems`, `internet-wifi-problems`, `router-network-problems`, `printer-problems`, `email-problems`, `software-problems`, `smart-tv-problems`, `streaming-device-problems`, `browser-problems`, `gaming-peripheral-problems`, `storage-backup-problems`, `account-login-problems`, `other-tech-problems`.

---

## Search

`src/pages/search-index.json.ts` builds `/search-index.json` from published guides at build time. Each record contains the URL, title, category, summary, keywords, section headings and stripped body text. The file is served statically and cached.

`src/lib/search.ts` normalizes text (case, accents, apostrophes, `Wi-Fi`/`wifi`, `e-mail`/`email`, `blue tooth`/`bluetooth`), removes stopwords, expands common synonyms, supports prefix matches, and ranks matches across titles, keywords, categories, headings, summaries and body text. Documents that match every query term are preferred; partial matches are a fallback so a long descriptive query still returns something useful.

The search page:

- Synchronizes the query and category with the URL.
- Offers category filter chips and a category dropdown.
- Shows matched section names, highlights matching terms, and announces result counts through a live region.
- Shows a no-results state with example searches and category links.
- Shows an honest “search is temporarily unavailable” state if the index cannot be fetched.
- Is marked `noindex, follow`; it is excluded from the sitemap and disallowed in `robots.txt`.

The header search box provides autocomplete with a listbox, arrow-key navigation, `aria-activedescendant`, Escape to close, and a link to the full results page. Search needs JavaScript; without it, the search page still presents the category browsing links.

---

## Contact and feedback

### Contact form

The form posts JSON to `/api/contact/`.

Delivery is configured with environment variables:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key for email delivery. |
| `CONTACT_TO_EMAIL` | Destination inbox for contact messages. |
| `CONTACT_FROM_EMAIL` | Verified sender address for Resend. |
| `CONTACT_WEBHOOK_URL` | Generic webhook endpoint used when the Resend trio is incomplete. |
| `CONTACT_WEBHOOK_SECRET` | Optional bearer token sent to the contact webhook. |

The email channel is used when all three Resend values are present. Otherwise, a configured webhook is used. If neither channel exists, the endpoint returns HTTP 503 with `code: "delivery_not_configured"` and the page explicitly says that no message was sent. The form never shows a success message unless the server confirms a successful delivery.

The endpoint:

- Requires `application/json`, limits the request body to 20 KB, and validates name, email, topic and message length.
- Uses a hidden honeypot field and rejects submissions completed in under two seconds.
- Applies an in-memory limit of 5 submissions per IP per 10 minutes.
- Logs only a generic delivery error message, never the message body or email address.

`GET /api/contact/` reports whether a delivery channel is configured without exposing secrets.

### Guide feedback

The feedback buttons post to `/api/feedback/`.

| Variable | Purpose |
| --- | --- |
| `FEEDBACK_WEBHOOK_URL` | Webhook that receives feedback records. |
| `FEEDBACK_WEBHOOK_SECRET` | Optional bearer token for the feedback webhook. |
| `FEEDBACK_LOG_DIR` | Directory for the JSONL fallback. Defaults to `.data` in the process working directory. |

If no webhook is set, feedback is appended to `FEEDBACK_LOG_DIR/feedback.jsonl`. That fallback requires a persistent filesystem; on an ephemeral host, configure the webhook instead. The endpoint validates the guide slug and category, requires a boolean `helpful` value, and applies a limit of 20 submissions per IP per 10 minutes. Local storage in the browser prevents the same browser from submitting feedback for the same guide twice.

The in-memory rate limiter protects a single server instance. Multi-instance deployments should also apply limits at the edge or use a shared store.

---

## SEO

- Every page sets a unique title and description, a canonical URL, Open Graph and Twitter metadata, and a social image.
- Guides emit `TechArticle`, `FAQPage` and `BreadcrumbList` JSON-LD; category and listing pages emit `CollectionPage`; legal and informational pages emit `WebPage`. The base layout adds `Organization` and `WebSite` structured data.
- The XML sitemap is generated by `@astrojs/sitemap` and excludes search, API and 404 routes. `public/robots.txt` points to `sitemap-index.xml`.
- `/search/` and the 404 error template are `noindex, follow`.
- Legacy URLs are 301 redirects defined in `redirects.mjs`; Astro emits redirect pages and `scripts/generate-redirects.mjs` writes `public/_redirects` for platform hosting.
- Internal links are checked after every build.

Set `SITE_URL` at build time to change the origin used by canonicals, JSON-LD, Open Graph URLs and the sitemap. The fallback is `https://fixproblemnow.com`.

---

## Accessibility

The site targets WCAG 2.2 AA. Implemented patterns include:

- Semantic landmarks, one `h1` per page, a skip link, and a visible focus style.
- Accessible navigation using native `<details>` elements with Escape handling and focus return.
- Labelled form fields, inline error messages tied to fields, `aria-invalid`, `aria-busy` while submitting, and live-region status messages.
- A search combobox with a labelled listbox, arrow-key navigation, `aria-selected`, `aria-activedescendant` and a text status announcement.
- Table-of-contents links, FAQ disclosure controls, and reduced-motion CSS for readers who request it.
- Responsive layout and readable text at increased zoom levels.

This is an implementation target, not a certification. Before launch, test with a screen reader, keyboard-only navigation, 200% and 400% zoom, high-contrast settings, and the browsers your audience uses. Record any remaining barriers and fix or document them.

---

## Security

- User input is length-limited, type-checked and normalized. Rendered content is escaped by Astro; JSON-LD serialization escapes `<` to prevent script injection.
- Secrets are read from server-side environment variables only. No secret is sent to the browser.
- Contact and feedback endpoints use JSON content-type checks, body limits, honeypot/timing checks, rate limiting and generic error messages.
- Sensitive form values are not written to logs.
- Response headers include `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy` and, on HTTPS, `Strict-Transport-Security`.
- The CSP baseline allows inline styles and scripts because the build inlines small scripts. It does not allow third-party script origins. Tighten it with hashes or nonces if you remove inline scripts.
- `public/_headers` provides the same headers for platforms such as Netlify and Cloudflare Pages.

No claim of PCI, HIPAA, SOC 2 or similar compliance is made. Those claims would require an actual audit and a different data-handling design.

### Node deployment header caveat

The Astro middleware applies security headers to server-rendered and API responses. With the Node standalone adapter, pre-rendered HTML and static assets are served by the adapter's static handler, which bypasses middleware. `_headers` is not read by the Node adapter.

If you deploy the Node server directly, add the headers at your reverse proxy or CDN. A Caddy example:

```caddy
fixproblemnow.com {
  encode zstd gzip

  header {
    X-Content-Type-Options nosniff
    X-Frame-Options DENY
    Referrer-Policy strict-origin-when-cross-origin
    Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()"
    Cross-Origin-Opener-Policy same-origin
    Strict-Transport-Security "max-age=31536000; includeSubDomains"
    Content-Security-Policy "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self' data:; font-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self'; object-src 'none'; upgrade-insecure-requests"
  }

  reverse_proxy 127.0.0.1:4321
}
```

If you deploy only the static output to a platform, the contact and feedback endpoints will not run. Deploy the Node server, or adapt the endpoints to that platform's serverless functions.

---

## Testing

```bash
npm run check      # TypeScript, Astro and content diagnostics
npm run build      # content validation, static pages, SSR entry
npm run test:links # post-build link, metadata and search-index checks
npm test           # all three in order
```

`scripts/check-site.mjs` walks the generated HTML and verifies:

- Internal links and fragment targets resolve.
- Canonical URLs are present and match the expected route.
- Titles and descriptions are present and unique enough.
- JSON-LD blocks parse as valid JSON.
- The sitemap contains the expected public routes and excludes search, API and 404.
- Redirect pages and the generated `_redirects` file are present.
- The search index is populated and each entry has a title and a summary/description.

The checker intentionally fails the build if a guide is added without working links or metadata.

### Manual QA before launch

- Search with synonyms, a partial phrase, an error message, a category filter, and a query with no matches.
- Test the header autocomplete with Arrow Up/Down, Enter, Escape and Tab.
- Submit the contact form with delivery unconfigured and confirm it says no message was sent; then configure a test channel and confirm a real message arrives.
- Submit guide feedback and confirm the server record exists in the webhook or JSONL log.
- Open a legacy URL and confirm a single 301 to the new page.
- Open a non-existent URL and confirm the 404 page and status code.
- Navigate the entire site using only the keyboard.
- Run a screen reader pass on the homepage, a guide, search and the contact form.
- Check 200% and 400% zoom, reduced motion, and forced colors.
- Confirm no unexpected console errors or failed network requests.

---

## Deployment

### Build

```bash
SITE_URL=https://your-domain.example npm run build
```

On PowerShell:

```powershell
$env:SITE_URL = "https://your-domain.example"
npm.cmd run build
```

The build writes static output to `dist/client` and the Node server to `dist/server`.

### Run the Node server

```bash
HOST=0.0.0.0 PORT=4321 node dist/server/entry.mjs
```

Or use the adapter's preview command for local verification:

```bash
npm run preview
```

Set the runtime environment variables for contact and feedback delivery in the hosting provider, not in a committed file. Use a persistent volume or a webhook for feedback if the filesystem is ephemeral.

### Platform notes

- **Netlify / Cloudflare Pages static hosting:** `public/_headers` and `public/_redirects` are generated for these formats. The contact and feedback endpoints still need a server runtime; a static-only deployment will not process them.
- **Node/VPS/container:** run `node dist/server/entry.mjs` behind a reverse proxy that adds static-asset headers (see the caveat above) and forwards `X-Forwarded-For` so rate limiting sees client IPs.
- **CDN:** HTML can be cached, but re-deploy after content changes. `/search-index.json` is cached for one hour by the supplied headers. API responses are `no-store`.

---

## Redirects and legacy URLs

`redirects.mjs` is the single source of truth. It currently contains 37 legacy redirects, including old category paths and old guide slugs.

To add a redirect:

1. Add an entry to `redirects.mjs`, for example `'/old-path/': '/new-path/'`.
2. Run `npm run build` (or `npm run prebuild`) to regenerate `public/_redirects`.
3. Confirm the new page exists and the checker passes.

The canonical all-guides page is `/problems/`; `/tech-problems/` redirects there. The help page remains `/get-help/`; `/get-expert-help/` redirects there.

---

## Editorial, legal and launch notes

- The site is independent and not affiliated with any manufacturer or software vendor.
- There are no invented authors, testimonials, credentials, success rates, search volumes or response-time promises.
- There are currently no affiliate links and no analytics. The affiliate disclosure and privacy policy state that clearly instead of describing nonexistent programs.
- The legal pages are implementation drafts, not legal advice. Have them reviewed for your jurisdiction, hosting location and data-handling arrangements before launch.
- The privacy policy should be updated if you add analytics, advertising, a CRM, a different email provider, or any new data processor.
- Publication and update dates are real metadata. When you change a guide materially, update `updated`; do not backdate guides to simulate history.

### Launch checklist

- [ ] Set the production `SITE_URL` and rebuild.
- [ ] Configure contact delivery and test a real submission.
- [ ] Configure feedback storage (webhook preferred) and test a real record.
- [ ] Add security headers at the edge/reverse proxy if using the Node adapter directly.
- [ ] Run `npm test` and confirm zero errors.
- [ ] Complete the manual QA and accessibility pass.
- [ ] Review the legal pages with a qualified adviser.
- [ ] Confirm the sitemap and `robots.txt` point at the production domain.
- [ ] Check every legacy redirect in a browser and with a status-code tool.
