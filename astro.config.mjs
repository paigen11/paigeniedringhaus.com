import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.paigeniedringhaus.com',
  integrations: [
    mdx(),
    sitemap(),
    react(), // For any interactive components if needed
  ],
  markdown: {
    remarkPlugins: [
      remarkGfm, // GitHub Flavored Markdown support
    ],
    rehypePlugins: [
      rehypeSlug, // Add IDs to headings
      [
        rehypeAutolinkHeadings, // Add anchor links to headings
        {
          behavior: 'wrap',
        },
      ],
      [
        rehypeExternalLinks, // Open external links in new tab
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
    ],
    shikiConfig: {
      // Use Shiki for syntax highlighting (replaces Prism)
      theme: 'github-dark',
      wrap: true,
    },
  },
});
