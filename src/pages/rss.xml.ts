import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIContext } from 'astro';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

// Site config values - TODO: import from SiteConfig when converted to ES module
const SITE_CONFIG = {
  siteRssTitle: 'Paige Niedringhaus RSS feed',
  siteDescription: 'Paige Niedringhaus is a full stack software engineer with a focus on frontend development.',
  siteUrl: 'https://www.paigeniedringhaus.com',
};

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');

  // Filter out omitted posts and sort by date descending
  const publishedPosts = posts
    .filter((post: CollectionEntry<'posts'>) => !post.data.omit)
    .sort((a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: SITE_CONFIG.siteRssTitle,
    description: SITE_CONFIG.siteDescription,
    site: context.site || SITE_CONFIG.siteUrl,
    items: publishedPosts.map((post: CollectionEntry<'posts'>) => ({
      title: post.data.title,
      description: post.data.subTitle || post.data.title,
      pubDate: new Date(post.data.date),
      link: `/blog/${post.slug}/`,
      categories: post.data.tags || [],
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
    })),
    customData: `<language>en-us</language>`,
  });
}
