/**
 * Convert a title to a URL-friendly slug
 * Matches the old Gatsby URL structure
 */
function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/-+/g, '-')           // Replace multiple hyphens with single
    .replace(/^-|-$/g, '');        // Remove leading/trailing hyphens
}

/**
 * Check if a slug looks like it was auto-generated from filename (starts with date pattern)
 */
function isFilenameSlug(slug: string): boolean {
  return /^\d{4}-\d{2}-\d{2}/.test(slug);
}

/**
 * Get the slug for a post - uses Astro's slug if it was set via frontmatter,
 * otherwise generates from title
 */
export function getPostSlug(title: string, astroSlug: string): string {
  // If Astro's slug looks like a filename (starts with date), generate from title instead
  if (isFilenameSlug(astroSlug)) {
    return titleToSlug(title);
  }
  // Otherwise, Astro's slug came from frontmatter - use it
  return astroSlug;
}
