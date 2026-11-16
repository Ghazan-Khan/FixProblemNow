import type { APIRoute } from 'astro';
import { getGuides, guideUrl } from '../lib/content';
import { categories } from '../data/categories';
import type { SearchDoc } from '../lib/search';

export const prerender = true;

function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_~`>]/g, '')
    .replace(/\|/g, ' ')
    .replace(/^\s*[-+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function headingsOf(markdown: string): string[] {
  return [...markdown.matchAll(/^##\s+(.+)$/gm)].map((match) =>
    match[1].replace(/[*_`]/g, '').trim(),
  );
}

export const GET: APIRoute = async () => {
  const guides = await getGuides();
  const categoryNames = new Map(categories.map((category) => [category.slug, category.name]));

  const docs: SearchDoc[] = guides.map((guide) => ({
    id: guide.id,
    url: guideUrl(guide),
    title: guide.data.title,
    category: guide.data.category,
    categoryName: categoryNames.get(guide.data.category) ?? guide.data.category,
    summary: guide.data.summary,
    keywords: [
      ...guide.data.keywords,
      ...guide.data.symptoms,
      ...guide.data.causes.map((cause) => cause.title),
    ],
    headings: headingsOf(guide.body ?? ''),
    body: stripMarkdown(guide.body ?? '').slice(0, 5000),
    updated: guide.data.updated.toISOString(),
  }));

  return new Response(JSON.stringify(docs), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
