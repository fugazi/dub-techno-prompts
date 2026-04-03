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
    category: z.string(),
    tags: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date()
  })
});

const responseCollection = defineCollection({
  type: 'content',
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
