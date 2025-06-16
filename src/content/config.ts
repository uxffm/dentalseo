import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    slug: z.string(),
    tags: z.array(z.string()),
    img: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
