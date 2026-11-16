// Astro exposes the site configured in astro.config.mjs. Keeping canonicals,
// JSON-LD and social metadata on the same origin avoids staging pages that
// claim to be the production site.
const configuredSite = import.meta.env.SITE || 'https://fixproblemnow.com';

export const site = {
  name: 'FixProblemNow',
  domain: new URL(configuredSite).hostname,
  url: configuredSite.replace(/\/$/, ''),
  tagline: 'Clear fixes for everyday tech problems',
  description:
    'Independent, practical troubleshooting guides for computers, phones, Wi-Fi, printers, software, smart TVs and other technology problems.',
  contact: {
    // The contact form posts to /api/contact/. Trailing slashes matter because
    // the site uses trailingSlash: 'always'; a 301 redirect would drop the POST body.
    // Email delivery is configured with server-side environment variables
    // documented in README.md.
    endpoint: '/api/contact/',
    feedbackEndpoint: '/api/feedback/',
  },
  social: [] as { label: string; url: string }[],
  legalUpdated: '2026-11-15',
} as const;

export const mainNav = [
  { label: 'All problems', href: '/problems/' },
  { label: 'How it works', href: '/how-it-works/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerLinks = {
  company: [
    { label: 'About FixProblemNow', href: '/about/' },
    { label: 'How it works', href: '/how-it-works/' },
    { label: 'Editorial standards', href: '/editorial-policy/' },
    { label: 'Corrections policy', href: '/corrections-policy/' },
    { label: 'Contact us', href: '/contact/' },
    { label: 'Get additional help', href: '/get-help/' },
    { label: 'Accessibility', href: '/accessibility/' },
  ],
  legal: [
    { label: 'Privacy policy', href: '/privacy-policy/' },
    { label: 'Terms and conditions', href: '/terms/' },
    { label: 'Disclaimer', href: '/disclaimer/' },
    { label: 'Affiliate disclosure', href: '/affiliate-disclosure/' },
    { label: 'HTML sitemap', href: '/sitemap/' },
  ],
};

export const searchExamples = [
  'Laptop won\u2019t turn on',
  'Wi-Fi connected but no internet',
  'Printer says offline',
  'Phone won\u2019t charge',
  'Windows update failed',
];

export const homeFaqs = [
  {
    q: 'Is FixProblemNow the official support site for my device?',
    a: 'No. FixProblemNow is an independent troubleshooting resource and is not affiliated with Microsoft, Apple, Google, Samsung, HP, Canon, or any other manufacturer. We link to official support pages when a step needs the manufacturer\u2019s own tool or documentation.',
  },
  {
    q: 'Are the troubleshooting steps safe to try?',
    a: 'Guides begin with low-risk checks such as cables, power, and restarts. Steps that can delete data, reset a device, or require opening hardware are labelled with warnings and placed later in the sequence. If a device shows signs of electrical damage, overheating, or a swollen battery, stop and seek qualified service.',
  },
  {
    q: 'How do I find a guide for my exact error message?',
    a: 'Enter the visible error text or a short description of the symptom in the search box. Search matches guide titles, common wording, device names, and keywords. If there is no close match, browse the relevant category or contact us with the details.',
  },
  {
    q: 'Why do some guides ask me to use official manufacturer tools?',
    a: 'Manufacturers control recovery images, firmware, drivers, and diagnostic utilities. Using their official tools avoids tampered downloads and preserves warranty options. We do not recommend third-party driver bundles or unofficial firmware.',
  },
  {
    q: 'Do I need an account to use FixProblemNow?',
    a: 'No. The site does not require an account, and you can read every published guide without signing in. Optional feedback is recorded anonymously, and the contact form only asks for the details needed to reply.',
  },
  {
    q: 'What if the guide does not solve my problem?',
    a: 'Each guide includes a \u201cwhen to stop\u201d section and links to related problems. You can also use the contact form to describe what happened and which steps you tried. We cannot remotely access your device or guarantee a repair.',
  },
];
