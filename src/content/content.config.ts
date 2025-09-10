import { z, defineCollection } from 'astro:content';

const categoryCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    color: z.string()
  })
});

const promptCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    prompt: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date(),
    responses: z.array(z.object({
      model: z.string(),
      version: z.string().optional(),
      response: z.string(),
      timestamp: z.date()
    })).optional().default([])
  })
});

export const collections = {
  categories: categoryCollection,
  prompts: promptCollection
};
