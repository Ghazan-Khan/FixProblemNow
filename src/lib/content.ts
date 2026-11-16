import { getCollection, type CollectionEntry } from 'astro:content';
import { getCategory, categories } from '../data/categories';

export type Guide = CollectionEntry<'guides'>;

const MS_PER_DAY = 86_400_000;

export function guideUrl(guide: Pick<Guide, 'id' | 'data'>): string {
  return `/${guide.data.category}/${guide.id}/`;
}

export function guideUrlById(id: string, category: string): string {
  return `/${category}/${id}/`;
}

export function isPublished(guide: Guide, now = new Date()): boolean {
  return !guide.data.draft && guide.data.published.getTime() <= now.getTime();
}

export async function getGuides(): Promise<Guide[]> {
  const now = new Date();
  const guides = (await getCollection('guides')).filter((guide) => isPublished(guide, now));
  return guides.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return b.data.updated.getTime() - a.data.updated.getTime();
  });
}

export async function getGuidesByCategory(category: string): Promise<Guide[]> {
  const guides = await getGuides();
  return guides
    .filter((guide) => guide.data.category === category)
    .sort((a, b) => {
      if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
      return b.data.updated.getTime() - a.data.updated.getTime();
    });
}

export async function getGuide(category: string, slug: string): Promise<Guide | undefined> {
  const guides = await getGuides();
  return guides.find((guide) => guide.data.category === category && guide.id === slug);
}

export function getCategoryWithCount(categorySlug: string, guides: Guide[]) {
  const category = getCategory(categorySlug);
  return {
    ...category,
    count: guides.filter((guide) => guide.data.category === categorySlug).length,
  };
}

export function getCategoriesWithCounts(guides: Guide[]) {
  return categories.map((category) => ({
    ...category,
    count: guides.filter((guide) => guide.data.category === category.slug).length,
  }));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const words = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`~\-|]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function freshnessLabel(guide: Guide, now = new Date()): string {
  const days = Math.floor((now.getTime() - guide.data.updated.getTime()) / MS_PER_DAY);
  if (days <= 1) return 'Updated today';
  if (days < 7) return `Updated ${days} days ago`;
  return `Updated ${formatDate(guide.data.updated)}`;
}

export function resolveRelated(guide: Guide, guides: Guide[]): Guide[] {
  const resolved: Guide[] = [];
  for (const id of guide.data.related) {
    const match = guides.find((candidate) => candidate.id === id);
    if (match && match.id !== guide.id) resolved.push(match);
  }

  if (resolved.length < 3) {
    const fallback = guides.filter(
      (candidate) =>
        candidate.id !== guide.id &&
        !resolved.some((item) => item.id === candidate.id) &&
        (candidate.data.category === guide.data.category ||
          candidate.data.keywords.some((keyword) =>
            guide.data.keywords.some((own) => own.toLowerCase() === keyword.toLowerCase()),
          )),
    );
    resolved.push(...fallback.slice(0, 3 - resolved.length));
  }

  return resolved.slice(0, 3);
}
