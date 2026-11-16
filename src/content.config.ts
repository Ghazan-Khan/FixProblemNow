import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categories } from './data/categories';

const categorySlugs = categories.map((category) => category.slug) as [string, ...string[]];

const faqSchema = z.object({
  q: z.string().min(8),
  a: z.string().min(20),
});

const sourceSchema = z.object({
  label: z.string().min(3),
  url: z.string().url(),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string().min(10),
    seoTitle: z.string().min(10).optional(),
    description: z.string().min(50).max(180),
    summary: z.string().min(80),
    quickAnswer: z.string().min(80),
    category: z.enum(categorySlugs),
    keywords: z.array(z.string()).default([]),
    symptoms: z.array(z.string()).min(3),
    causes: z
      .array(
        z.object({
          title: z.string().min(3),
          detail: z.string().min(30),
        }),
      )
      .min(3),
    prep: z.array(z.string()).default([]),
    safetyNotes: z.array(z.string()).default([]),
    verification: z.string().min(40),
    whenToStop: z.string().min(60),
    faqs: z.array(faqSchema).min(3),
    sources: z.array(sourceSchema).min(1),
    related: z.array(z.string()).default([]),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    featured: z.boolean().default(false),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).default('Beginner'),
    time: z.string().default('15\u201330 minutes'),
    risk: z.enum(['Low', 'Moderate', 'High']).default('Low'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
