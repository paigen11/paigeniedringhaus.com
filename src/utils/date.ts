/**
 * Format a date as a locale date string.
 * Accepts either an ISO string (YYYY-MM-DD) or a Date object.
 * ISO strings use local-time construction to avoid UTC midnight off-by-one issues.
 *
 * @param date   - ISO string or Date object
 * @param month  - 'long' (default) → "February 13, 2026"
 *                 'short'          → "Feb 13, 2026"
 */
export function formatDate(
  date: Date | string,
  month: 'long' | 'short' = 'long',
): string {
  const d =
    typeof date === 'string'
      ? (() => { const [y, m, day] = date.split('-').map(Number); return new Date(y, m - 1, day); })()
      : date;
  return d.toLocaleDateString('en-US', { year: 'numeric', month, day: 'numeric' });
}
