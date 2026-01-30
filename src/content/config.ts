import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    subTitle: z.string().optional(),
    date: z.coerce.date(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featuredImage: image().optional(),
    omit: z.boolean().optional().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
