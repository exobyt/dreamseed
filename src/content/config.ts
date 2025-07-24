import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seeds = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/seeds" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    featured: z.boolean().default(false),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
    website: z.string().url().optional(),
    twitter: z.string().optional(),
    github: z.string().optional(),
    joinedAt: z.coerce.date(),
  }),
});

export const collections = {
  seeds,
  authors,
};