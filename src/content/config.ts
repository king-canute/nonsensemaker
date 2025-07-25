// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    featured: z.boolean().optional(),
    heroImage: image().optional(), // Use the 'image' helper
    heroAlt: z.string().optional(),
  }),
});

const videosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    youtubeId: z.string(),
  }),
});

// Re-export with a single `collections` object.
export const collections = {
  'articles': articlesCollection,
  'videos': videosCollection,
};