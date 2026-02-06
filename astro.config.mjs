import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import { remarkTransformImagePaths } from './remark-transform-image-paths.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.paigeniedringhaus.com',
  output: 'static',
  integrations: [
    mdx(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkGfm, // GitHub Flavored Markdown support
      remarkTransformImagePaths, // Transform relative image paths to absolute URLs
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
