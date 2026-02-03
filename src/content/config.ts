import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subTitle: z.string().optional(),
    date: z.coerce.date(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featuredImage: z.string().optional(),
    omit: z.boolean().optional().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
