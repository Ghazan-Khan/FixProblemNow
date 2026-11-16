import { site } from '../data/site';
import type { Guide } from './content';
import type { Category } from '../data/categories';

export type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: `${site.url}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${site.url}/brand/logo-512.png`,
      width: 512,
      height: 512,
    },
    description: site.description,
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: `${site.url}/`,
    description: site.description,
    publisher: { '@id': `${site.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${site.url}/search/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(
  items: { label: string; href: string }[],
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: new URL(item.href, site.url).toString(),
    })),
  };
}

export function techArticleSchema(guide: Guide, url: string, category: Category): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${new URL(url, site.url).toString()}#article`,
    headline: guide.data.title,
    description: guide.data.description,
    datePublished: guide.data.published.toISOString(),
    dateModified: guide.data.updated.toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': new URL(url, site.url).toString(),
    },
    articleSection: category.name,
    proficiencyLevel: guide.data.difficulty,
    keywords: guide.data.keywords.join(', '),
    author: { '@id': `${site.url}/#organization` },
    publisher: { '@id': `${site.url}/#organization` },
    inLanguage: 'en',
  };
}

export function faqSchema(faqs: { q: string; a: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function collectionPageSchema(
  name: string,
  description: string,
  url: string,
  guides: { title: string; href: string }[],
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: new URL(url, site.url).toString(),
    isPartOf: { '@id': `${site.url}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: guides.length,
      itemListElement: guides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: guide.title,
        url: new URL(guide.href, site.url).toString(),
      })),
    },
  };
}

export function webPageSchema(
  name: string,
  description: string,
  url: string,
  options: { dateModified?: string; type?: string } = {},
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': options.type ?? 'WebPage',
    '@id': `${new URL(url, site.url).toString()}#webpage`,
    name,
    description,
    url: new URL(url, site.url).toString(),
    isPartOf: { '@id': `${site.url}/#website` },
    publisher: { '@id': `${site.url}/#organization` },
    inLanguage: 'en-GB',
    ...(options.dateModified ? { dateModified: options.dateModified } : {}),
  };
}

export function serializeJsonLd(value: JsonLd | JsonLd[]): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
