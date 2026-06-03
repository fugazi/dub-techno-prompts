import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const categoryCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    color: z.string()
  })
});

const promptCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prompts' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    prompt: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date(),
    responses: z.array(z.any()).optional()
  })
});

const responseCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/responses' }),
  schema: z.object({
    id: z.string(),
    promptId: z.string(),
    model: z.string(),
    version: z.string().optional(),
    timestamp: z.date()
  })
});

export const collections = {
  categories: categoryCollection,
  prompts: promptCollection,
  responses: responseCollection
};
