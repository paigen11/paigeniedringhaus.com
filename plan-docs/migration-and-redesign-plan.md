# Paigeniedringhaus.com Migration & Redesign Plan

**Last Updated:** 2026-02-15 (Phase 2 redesign in progress - homepage + about page complete)

## Overview

This document outlines the comprehensive plan to:
1. **Migrate** from Gatsby to Astro.js
2. **Redesign** the site structure and visual design

**Current Status:** 🎨 **Phase 2 Redesign In Progress** - Design system, theming, navigation, homepage, and about page complete. Next: Blog post enhancements (featured images, tags, reading time, table of contents).

**Phase 2 Progress:**
- ✅ Design system CSS tokens complete in global.css:
  - Typography scale (`--text-xs` through `--text-5xl`)
  - Full spacing system (`--space-1` through `--space-24`)
  - Layout constants (`--content-width`, `--content-width-narrow`, `--header-height`)
  - Border radius scale (`--radius-sm` through `--radius-xl`)
  - Shadow scale (`--shadow-sm` through `--shadow-xl`)
- ✅ `.page-container` updated to use design tokens
- ✅ Figcaption styling added to BlogPost.astro
- ✅ CSS consolidation: homepage and blog pages now use `.page-container`
- ✅ Cleanup: Removed unused SiteConfig.js, cleaned Gatsby refs from eslint.config.mjs
- ✅ CLAUDE.md created for project documentation
- ✅ Light/dark mode toggle complete:
  - Theme toggle button in header with sun/moon icons
  - Early-loading script prevents flash of wrong theme
  - localStorage persistence for user preference
  - Falls back to system preference (prefers-color-scheme)
  - Smooth 200ms transitions for theme switching
  - Logo visibility fixed in dark mode (filter invert)
  - Dark mode colors adjusted for better accessibility (#818cf8 primary, #c4b5fd secondary)
- ✅ Blog post URL slugs fixed:
  - URLs now generate from post title (matching old Gatsby structure)
  - Explicit frontmatter slugs are respected when present
  - Created shared `src/utils/slug.ts` utility
- ✅ Netlify prerender extension disabled (was causing unnecessary function invocations)
- ✅ Added `output: 'static'` to astro.config.mjs for explicit static generation
- ✅ Navigation restructure complete:
  - Nav updated to [Blog, Podcasts, About, Contact, Archive]
  - Added `type` field (cohost/guest) to `src/data/podcasts.js` for filtering
  - Created `src/pages/podcasts.astro` (Front-end Fire, PodRocket co-host episodes, React Round Up)
  - Created `src/pages/archive.astro` (collapsible sections: Courses, Talks & Videos, Guest Podcast Appearances, Published Articles)
  - Deleted `courses.astro` and `media.astro`
  - Added 301 redirects in netlify.toml: `/courses` → `/archive`, `/media` → `/archive`
  - Updated internal link in `about.astro`: `/media` → `/archive`
  - ButterCMS logo dark mode fix (filter invert)
  - Course videos deduplicated (only in Courses section, not Talks)
  - Published articles ordered newest-to-oldest by company (Blues, newline, LogRocket, ButterCMS)
- ✅ Homepage redesign complete:
  - Hero section with photo, title ("Full-Stack Software Engineer"), tagline, social icon links
  - Featured cards: latest blog post (with hero image thumbnail) + Front-end Fire (horizontal logo)
  - 6 recent posts grid using PostCard component
  - Newsletter signup section (Subscribe component)
  - Removed migration notice banner
  - `--color-tag-bg` CSS variable added to design system (light: `#8b5cf6`, dark: `#5b21b6`) for readable tag badges
  - Removed `min-height: 100vh` from `.page-container` (was causing excess spacing)
- ✅ About page updated:
  - Front-end Fire and PodRocket co-hosting added to bio
  - AllSpice (current) and Blues (previous) roles already present
- 🔄 Next: Blog post enhancements (featured images, tags, reading time, table of contents)

**Progress Summary:**
- ✅ Astro 5.17.1 installed with all core integrations
- ✅ Content collections configured with Git submodule working (symlinks for posts & images)
- ✅ All 14 blog posts with embeds converted to MDX (YouTube, CodePen, CodeSandbox working)
- ✅ Custom remark plugin for image path resolution
- ✅ Data files migrated to src/data/ (TypeScript conversion deferred)
- ✅ Global CSS with modern nesting - all common page styles centralized
- ✅ Blog listing and individual blog post pages with tag filtering
- ✅ Header component with responsive navigation (desktop/mobile hamburger menu)
- ✅ Footer component with social links and copyright
- ✅ All pages built: About, Contact, Courses, Media, 404
- ✅ Subscribe button with animated gradient and shine effects
- ✅ Static assets cleaned (removed 3000+ Gatsby artifacts, kept only source files)
- ✅ .gitignore updated for Astro (.astro/ and dist/ excluded, build artifacts untracked)
- ✅ Migrated from Yarn to npm (removed yarn.lock, kept package-lock.json)
- ✅ ESLint 9.39.2 with flat config (eslint.config.mjs) and eslint-plugin-astro
- ✅ TypeScript 5.9.3 and @astrojs/check installed for type checking
- ✅ All linting and TypeScript errors resolved across all components and pages
- ✅ npm scripts added: `lint`, `type-check` for comprehensive code quality checks
- ✅ Package versions pinned: Node 24.13.0, npm 10.9.2 (via engines + Volta)
- ✅ Package.json updated: v2.0.0, description changed to "running on Astro"
- ✅ RSS feed created at src/pages/rss.xml.ts with full post content
  - Filters omitted posts, sorted by date descending
  - Includes full HTML content using markdown-it parser and sanitize-html
  - Feed size: 1.8MB with full post content (vs 44KB with just metadata)
  - Installed: markdown-it, sanitize-html, @types/markdown-it, @types/sanitize-html
- ✅ Sitemap integration configured (@astrojs/sitemap) - auto-generates sitemap-index.xml
- ✅ Netlify configuration updated: build command, publish directory, Node version
- ✅ **Gatsby cleanup complete** - All legacy dependencies removed:
  - Removed 31 Gatsby packages (gatsby, gatsby-cli, all plugins)
  - Removed React & React-DOM (no React components needed)
  - Removed all FontAwesome packages (4 total)
  - Removed unused dependencies: classnames, sass, lodash, prismjs, etc.
  - Removed @astrojs/react integration from astro.config.mjs
  - npm install cleanup: Removed 1,553 packages (went from 3,046 to 1,493 total)
- ✅ **Fixed all image path references:**
  - Updated src/data/speaking.js and src/data/podcasts.js (changed imports to public path strings)
  - Updated data/speaking.js and data/podcasts.js (changed from ../src/images/* to /thumbnails/*)
  - Fixed media.astro to handle string image paths instead of imports
  - Copied content/images/react.png to public/thumbnails/ for consistency
  - Fixed date typo in podcasts.js (2025-11=13 → 2025-11-13)
- ✅ **Build verification**: npm run build succeeds with 0 errors, 0 warnings, 90 pages built
- ✅ tsconfig.json created: Fixed all TypeScript module resolution errors in VS Code
- ✅ **Netlify deployment successful**: Git submodules work correctly in build environment
- ✅ **Blog filtering implemented**:
  - Client-side tag filtering with JavaScript
  - All 65+ tags visible in scrollable sidebar with scroll shadow indicators
  - All tags displayed on blog post cards (no longer limited to 3)
  - Mobile/tablet responsive with 150px height limit and scroll shadows
  - Active state styling for selected tag filters
- ✅ **Phase 1 MERGED to master** on 2026-02-03. Phase 2 redesign now in progress on new branch.

**Known Issues:**
- CodeSandbox iframe auto-scrolls page on load (low priority - cosmetic only)

**Original:** Gatsby v4.13.1, React 18, deployed on Netlify
**Target:** Astro 5.x with modern design, improved content organization

---

## Phase 1: Gatsby → Astro Migration

**Priority:** Complete this phase FIRST before any redesign work

### 1.1 Project Setup & Foundation

- [x] ✅ Initialize new Astro project using `npm create astro@latest`
  - Installed Astro 5.17.1 manually
  - Node 24.13.0 LTS configured via Volta
  - TypeScript support enabled (Astro includes TypeScript by default)
  - Renamed Gatsby `src/` → `src-gatsby/` for reference
  - Created fresh `src/` directory for Astro
- [x] ✅ Install core integrations:
  - `@astrojs/mdx` for markdown/MDX processing
  - `@astrojs/react` (for any interactive components if needed)
  - `@astrojs/sitemap` for sitemap generation
  - `@astrojs/rss` for RSS feed
  - `rehype-autolink-headings`, `rehype-slug`, `rehype-external-links`, `remark-gfm`
- [x] ✅ Verify Git submodule structure remains intact
  - Created symlinks for Git submodule integration:
    - `src/content/posts` → `../../content/posts` (for Astro content collections)
    - `public/images` → `../content/images` (for browser image serving)
  - Content folder working correctly with Astro
  - Symlinks automatically update when submodule updates
- [x] ✅ Package Management & Linting Setup
  - **Package Manager Migration**: Migrated from Yarn to npm
    - Removed `yarn.lock`, kept `package-lock.json`
    - Removed yarn from Volta config in `package.json`
    - Added `engines` field: Node >=24.13.0, npm >=10.9.0
    - Pinned npm 10.9.2 in Volta config
    - Updated package.json: v2.0.0, description "running on Astro"
  - **ESLint 9 Setup**: Modern flat config with Astro support
    - Upgraded to ESLint 9.39.2 with `eslint.config.mjs` flat config format
    - Installed `eslint-plugin-astro@1.5.0` and `astro-eslint-parser@1.2.2`
    - Installed `@eslint/js@9.39.2` for base recommended rules
    - Removed old Gatsby ESLint packages (airbnb config, react/jsx-a11y/import plugins)
    - Configured explicit parser setup for `.astro` files with TypeScript support
    - Set up ignores: `.astro/`, `.cache/`, `dist/`, `src-gatsby/`, `gatsby-*.js`, `data/**/*.js`
  - **TypeScript Setup**: Full type checking enabled
    - Installed `typescript@5.9.3` and `typescript-eslint@8.54.0`
    - Installed `@astrojs/check@0.9.6` for Astro-specific type validation
    - Added npm scripts: `type-check` (astro check) and `lint` (eslint + type-check)
  - **Fixed All Linting & Type Errors**:
    - Components: Fixed regex escapes (CodePen, CodeSandbox), removed deprecated `frameborder` (YouTube), proper img typing (VideoCard)
    - Pages: Added `CollectionEntry<'posts'>` types to all map/sort callbacks in index, blog listing, blog post
    - Layouts: Added `string` types to tag map callbacks, `is:inline` directive to GA script
    - Data: Replaced deprecated `substr()` with `slice()` in SiteConfig.js
    - **Post-cleanup fixes**:
      - media.astro: Added `Record<string, string>` type to companyLogos, removed typeof checks for image paths
      - rss.xml.ts: Changed `post.data.description` to `post.data.subTitle` (correct field name)
    - Result: 0 errors, 0 warnings from `npm run lint` and `npm run build`

### 1.2 Content Collections Setup

- [x] ✅ Define content collection schema in `src/content/config.ts`
  - Schema created with all required frontmatter fields:
    - title (string)
    - subTitle (string, optional)
    - date (coerced to date)
    - category (string, optional)
    - tags (array of strings, optional)
    - featuredImage (image, optional)
    - omit (boolean, optional, default false)
- [x] ✅ Configure Astro to read from `content/posts/` directory
  - Symlink created successfully
- [x] ✅ Test content collection queries work with existing markdown files
  - Verified with dev server running

### 1.3 Markdown Plugin Migration

**Current Gatsby Remark Plugins → Astro Equivalents:**

- [x] ✅ `gatsby-remark-prismjs` → Shiki (configured in astro.config.mjs)
- [x] ✅ `gatsby-remark-images` → Custom remark plugin `remark-transform-image-paths.mjs`
- [x] ✅ `gatsby-remark-embed-video` → Custom Astro `<YouTube />` component
- [x] ✅ `gatsby-remark-codepen` → Custom Astro `<CodePen />` component
- [x] ✅ CodeSandbox embeds → Custom Astro `<CodeSandbox />` component
- [x] ✅ `gatsby-remark-autolink-headers` → `rehype-autolink-headings` plugin
- [ ] `gatsby-remark-code-titles` → Custom Astro component or CSS solution (deferred)
- [x] ✅ `gatsby-remark-external-links` → `rehype-external-links` plugin
- [x] ✅ `gatsby-remark-copy-linked-files` → Astro handles this natively
- [ ] `gatsby-remark-responsive-iframe` → CSS solution or custom component (deferred)

**Handling YouTube, CodePen & CodeSandbox Embeds:**

**Current situation:**
- 14 blog posts contain YouTube, CodePen, or CodeSandbox embeds
- YouTube syntax: `` `youtube: https://youtu.be/VIDEO_ID` ``
- CodePen syntax: Plain URL like `https://codepen.io/paigen11/pen/PEN_ID`
- CodeSandbox: Full iframe embed tags
- All were handled by Gatsby remark plugins

**Migration strategy:**
- [x] ✅ **Create custom Astro components:**
  - `src/components/YouTube.astro` - Accepts `id` or `url` prop, auto-extracts ID from URLs
  - `src/components/CodePen.astro` - Accepts `id` and `user` props, or `url` prop
  - `src/components/CodeSandbox.astro` - Accepts `id` or `url` prop, plus optional `file` parameter
  - All components render responsive iframes with inline styles for proper width/height
- [x] ✅ **Create custom remark plugin for image paths:**
  - `remark-transform-image-paths.mjs` transforms relative paths (`../images/`) to absolute URLs (`/images/`)
  - Prevents Astro from trying to process images from Git submodule at build time
  - Images served from `public/images` symlink to `content/images`
- [x] ✅ **Create MDX conversion guide:**
  - Documented all 14 posts requiring conversion in `plan-docs/mdx-conversion-guide.md`
  - Includes step-by-step instructions for submodule conversion
  - Lists all embed URLs and line numbers for each post
- [ ] **Convert affected posts to MDX in submodule:** (TO DO - User will do this)
  - Rename 14 posts from `.md` to `.mdx`
  - Astro content collections support mixed `.md` and `.mdx` files seamlessly
  - Majority of posts can remain as `.md`
- [ ] **Test all converted posts render embeds correctly** (TO DO - after submodule conversion)
- [x] ✅ Configure rehype/remark plugins in `astro.config.mjs`
  - `rehype-slug` for heading IDs
  - `rehype-autolink-headings` for anchor links
  - `rehype-external-links` for external link handling
  - `remark-gfm` for GitHub Flavored Markdown
  - `remark-transform-image-paths` for image path transformation
  - Shiki for syntax highlighting (replaces Prism)

### 1.4 Data Migration

**Current data files in `data/` directory:**
- `SiteConfig.js` - site metadata
- `courses.js` - course information
- `courseVideos.js` - YouTube videos
- `mediumBlogs.js` - external Medium articles
- `podcasts.js` - podcast guest appearances
- `publications.js` - company articles
- `speaking.js` - talks and presentations

**Migration Strategy:**
- [x] ✅ Move to `src/data/` directory
- [x] ✅ Update image import paths:
  - Changed `../src/images/*` to `../src-gatsby/images/*`
  - Changed `../content/images/*` to `../../content/images/*`
- [ ] Convert to TypeScript `.ts` files (TO DO)
  - Add proper type definitions for data structures
  - Replace `moment` with native Date or `date-fns` for better TS support
- [ ] Update imports throughout codebase as pages are built (IN PROGRESS)

### 1.5 Pages & Routing

**Current Gatsby pages → Astro pages:**

| Gatsby Page | Astro Equivalent | Status | Notes |
|------------|------------------|---------|-------|
| `src/pages/index.js` | `src/pages/index.astro` | ✅ Done | Homepage with latest 3 blog posts |
| `src/pages/blog.js` | `src/pages/blog/index.astro` | ✅ Done | Blog listing with tag filtering sidebar |
| `src/templates/post.jsx` | `src/pages/blog/[slug].astro` | ✅ Done | Dynamic blog posts with full markdown styling |
| `src/pages/about.js` | `src/pages/about.astro` | ✅ Done | About page with updated job/tech info |
| `src/pages/contact.js` | `src/pages/contact.astro` | ✅ Done | Contact page with newsletter signup |
| `src/pages/courses.js` | `src/pages/courses.astro` | ✅ Done | Courses page with video grid (→ archive later in redesign) |
| `src/pages/media.js` | `src/pages/media.astro` | ✅ Done | Media page: talks, podcasts, articles (→ restructure later in redesign) |
| `src/pages/404.js` | `src/pages/404.astro` | ✅ Done | 404 error page with pleading face emoji |

**Implementation Tasks:**
- [x] ✅ Create homepage in `src/pages/index.astro`
  - Displays latest 3 blog posts
  - Links to full blog
  - Shows migration notice
- [x] ✅ Create blog listing page in `src/pages/blog/index.astro`
  - Tag filtering sidebar with all 65+ tags (scrollable with shadow indicators)
  - Client-side JavaScript filtering by tag
  - All posts sorted by date (newest first)
  - Filters out omitted posts
  - Responsive grid layout with mobile scrolling (150px height limit)
- [x] ✅ Implement `getStaticPaths()` for dynamic blog post routes
  - Created `src/pages/blog/[slug].astro`
  - Uses `BlogPost.astro` layout
  - Full markdown styling with code highlighting
- [x] ✅ Create `PostCard.astro` component for blog listing
  - Shows title, subtitle, date, all tags (no limit), category
  - Hover effects with transform and shadow
  - Tags wrap to multiple lines as needed
- [ ] Set up pagination for blog listing page (deferred - not needed yet)
- [x] ✅ Test all routes work correctly

### 1.6 Components Migration

**Current React components to convert:**

Layout Components:
- [x] ✅ `Layout/Layout.jsx` → `src/layouts/Layout.astro`
  - Created with SEO meta tags, Open Graph, Twitter Card
  - Google Analytics 4 integrated
  - Links to global CSS
- [x] ✅ `BlogPost.astro` layout created for individual blog posts
  - Full markdown content styling (h2, h3, code, blockquotes, lists)
  - Post header with metadata (category, title, subtitle, date, tags)
  - Back to blog link in footer
  - Typography optimized for reading
- [ ] `Header/Header.jsx` → `src/components/Header.astro` (NEXT)
- [ ] `Footer/Footer.jsx` → `src/components/Footer.astro` (NEXT)

Content Components:
- [x] ✅ `PostCard/PostCard.jsx` → `src/components/PostCard.astro`
  - Displays title, subtitle, date, tags (first 3), category badge
  - Hover effects with transform and shadow
  - Links to individual blog posts
- [x] ✅ MDX embed components created:
  - `YouTube.astro` - Auto-extracts video ID from URLs
  - `CodePen.astro` - Parses CodePen URLs
  - `CodeSandbox.astro` - Handles CodeSandbox embeds with optional file parameter
- [ ] `VideoCard/VideoCard.jsx` → `src/components/VideoCard.astro` (TO DO)
- [x] ✅ `SEO/SEO.jsx` → Merged into Layout.astro

Interactive Components (if any):
- [ ] Identify which components need client-side JS (TO DO)
- [ ] Keep as React components with `client:*` directives if needed
- [ ] Or convert to vanilla JS/Web Components

**FontAwesome Icons:**
- [ ] Evaluate: Keep with `@astrojs/react` or migrate to `astro-icon` package (TO DO)
- [ ] Update icon references throughout site

### 1.7 Styling Migration

**Current setup:** SCSS files imported into React components

**Migration strategy:** Convert to modern native CSS using Astro's recommended approaches

**Astro CSS Strategy:**
- [x] ✅ **Scoped component styles** using `<style>` blocks in `.astro` files
  - Astro automatically scopes styles to the component
  - No CSS-in-JS runtime overhead
  - Supports modern CSS features (nesting, container queries, custom properties)
- [x] ✅ **Global styles** in `src/styles/global.css`
  - CSS reset/normalize complete
  - CSS custom properties (design tokens) defined for light/dark mode
  - Typography base styles set
  - Foundation ready for component styles

**Modern CSS Features to Leverage:**
- [ ] **CSS Nesting** - native browser support, no preprocessor needed
  ```css
  .card {
    padding: 1rem;

    & h2 {
      font-size: 1.5rem;
    }

    &:hover {
      transform: translateY(-4px);
    }
  }
  ```
- [ ] **CSS Custom Properties** - for theming and design tokens
- [ ] **Container Queries** - for responsive components
- [ ] **CSS Grid & Flexbox** - for layouts
- [ ] **Modern pseudo-classes** - `:is()`, `:where()`, `:has()`
- [ ] **Logical properties** - `margin-inline`, `padding-block`, etc.

**Migration Tasks:**
- [x] ✅ Convert SCSS variables to CSS custom properties (in global.css)
- [ ] Convert SCSS nesting to native CSS nesting (as components are built)
- [ ] Remove SCSS mixins, replace with CSS features or utility classes (as needed)
- [ ] Move component styles from `.scss` files to `<style>` blocks in `.astro` components (IN PROGRESS)
- [x] ✅ Create `src/styles/global.css` with design tokens and resets
- [x] ✅ Light/dark mode custom properties defined in global.css
- [ ] Test all styles render correctly across browsers (TO DO)
- [ ] Verify no SCSS dependencies remain in `package.json` (keep for now during migration)

**File Organization:**
```
src/styles/
├── global.css       (resets, base styles)
├── theme.css        (CSS custom properties for theming)
└── utilities.css    (optional utility classes)

src/components/
└── Component.astro  (with scoped <style> block)
```

### 1.8 Features & Integrations

- [x] ✅ **RSS Feed**
  - `@astrojs/rss` installed
  - Created `src/pages/rss.xml.ts` with TypeScript
  - Filters out omitted posts, sorts by date descending
  - **Includes full HTML post content** (not just summaries)
    - Uses `markdown-it` to parse MDX/Markdown to HTML
    - Uses `sanitize-html` to clean and secure HTML output
    - Installed types: `@types/markdown-it`, `@types/sanitize-html`
  - Includes metadata: title, description, pubDate, link, categories (tags)
  - Site config values inlined (TODO: import when SiteConfig converted to ES module)
  - Generates at `/rss.xml` - 1.8MB with full post content
  - Standard RSS 2.0 format with content:encoded namespace

- [x] ✅ **Sitemap**
  - `@astrojs/sitemap` installed
  - Configured in `astro.config.mjs` with site URL
  - Auto-generates `/sitemap-index.xml` and `/sitemap-0.xml`
  - Includes all pages and blog posts

- [ ] **Analytics**
  - Google Analytics 4 only (ID: `G-33LYCFN2QF`)
  - Add script to `<head>` in base layout
  - Remove legacy Google Analytics (UA-85613962-11)

- [ ] **SEO & Meta Tags**
  - Create reusable SEO component
  - Add Open Graph tags
  - Add Twitter Card tags
  - Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator) and [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

- [ ] **Image Optimization**
  - Use Astro's `<Image />` component for static images
  - Configure for featured images in blog posts
  - Optimize existing images in `static/` directory

- [ ] **Canonical URLs**
  - Add canonical links to all pages
  - Base URL: `https://www.paigeniedringhaus.com`

- [ ] **Offline Support**
  - Evaluate if `gatsby-plugin-offline` functionality is needed
  - Implement service worker if required (or skip for simplicity)

### 1.9 Build & Deployment Configuration

- [x] ✅ Update `package.json` scripts:
  ```json
  {
    "scripts": {
      "dev": "astro dev",
      "build": "astro check && astro build",
      "preview": "astro preview",
      "gatsby:develop": "gatsby develop",
      "gatsby:build": "gatsby build"
    }
  }
  ```
  - Gatsby scripts preserved with `gatsby:` prefix for reference

- [x] ✅ Create `public/` directory and add static assets
  - Copied favicon and logos from `static/` to `public/`
  - Astro serves files from `public/` directory (not `static/`)

- [x] ✅ Update `netlify.toml`:
  - Removed Gatsby plugin (`@netlify/plugin-gatsby`)
  - Changed build command to `npm run build`
  - Changed publish directory to `dist/` (from `public/`)
  - Updated Node version to 24 (from 20)
  - Git submodules should work automatically (`.gitmodules` configured)
  - Current configuration:
    ```toml
    [build]
      publish = "dist"
      command = "npm run build"
    [build.environment]
      NODE_VERSION = "24"
    ```

- [x] ✅ Test build locally with `npm run build` - Success! (0 errors, 0 warnings, 90 pages)
- [x] ✅ Remove all Gatsby dependencies and unused packages (31+ packages removed)
- [x] ✅ Fix image path references in data files (converted to public path strings)
- [x] ✅ Run npm install to clean up node_modules (removed 1,553 packages)
- [x] ✅ Verify build still passes after cleanup (0 errors, 0 warnings)
- [x] ✅ Test preview with `npm run preview`
- [x] ✅ Deploy to Netlify and verify git submodules work in build environment
- [x] ✅ Verify RSS feed accessible at `/rss.xml`
- [x] ✅ Verify sitemap accessible at `/sitemap-index.xml`
- [x] ✅ Verify Git submodules pull correctly in Netlify build
- [x] ✅ Implement blog post tag filtering (client-side JavaScript with all tags visible)

### 1.10 Migration Testing Checklist

Before merging to main:

- [x] ✅ Blog tag filtering implemented and working
- [ ] All pages render correctly
- [ ] All blog posts render with:
  - [ ] Featured images
  - [ ] Syntax highlighting
  - [ ] Embedded videos (YouTube)
  - [ ] Embedded CodePens
  - [ ] External links open in new tab
  - [ ] Autolinked headers work
- [ ] Navigation works on all pages
- [ ] RSS feed validates
- [ ] Sitemap generates
- [ ] Analytics tracking works
- [ ] Mobile responsive design intact
- [ ] Lighthouse score: Performance > 90
- [ ] No console errors
- [ ] 404 page works
- [ ] All internal links work

---

## Phase 2: Site Redesign & Restructuring

**Priority:** Start AFTER Phase 1 migration is complete and deployed

### 2.1 New Information Architecture

#### Navigation Structure

**Primary Navigation (Desktop & Mobile):**
1. **Blog** - Main content hub
2. **Podcasts** - Dedicated podcasting section
3. **About** - Personal/professional info
4. **Contact** - Contact form/email
5. **Archive** - Historical content (talks, course, old media)

**Changes from current site:**
- **NEW:** Podcasts page (dedicated section)
- **NEW:** Archive page (consolidates older content)
- **REMOVED from main nav:** Courses (moved to Archive)
- **REMOVED from main nav:** Media (split between Podcasts and Archive)

#### Page Structure Details

**Homepage (`/`):**
```
┌─────────────────────────────────────────────┐
│ Hero Section                                │
│ - Name: "Paige Niedringhaus"               │
│ - Title: "Lead Software Engineer @         │
│   AllSpice"                                │
│ - Tagline: "Writing about web development, │
│   hosting podcasts, building things"       │
│ - Social links (GitHub, X, Medium, DEV,    │
│   Email)                                   │
│ - Optional: Photo/avatar                   │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Featured Content (2-3 Cards)               │
│ ┌────────┐ ┌────────┐ ┌────────┐          │
│ │Latest  │ │Front-  │ │About   │          │
│ │Blog    │ │end Fire│ │Snippet │          │
│ │Post    │ │Episode │ │        │          │
│ └────────┘ └────────┘ └────────┘          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Recent Blog Posts (Grid: 4-6 cards)        │
│ ┌─────┐ ┌─────┐ ┌─────┐                   │
│ │     │ │     │ │     │                   │
│ └─────┘ └─────┘ └─────┘                   │
│ ┌─────┐ ┌─────┐ ┌─────┐                   │
│ │     │ │     │ │     │                   │
│ └─────┘ └─────┘ └─────┘                   │
│                                             │
│ [View All Posts →]                         │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Newsletter Signup                           │
│ - Email subscription form                   │
│ - Brief description of what subscribers get │
└─────────────────────────────────────────────┘
```

**Blog Page (`/blog`):**
- Hero: Page title, description
- Tag filter bar (all tags from posts)
- Post grid (3 columns desktop, 1 column mobile)
- Pagination controls
- Each post card shows:
  - Featured image
  - Category badge
  - Title
  - Excerpt (2 lines)
  - Date, reading time, tags
  - Hover effect (lift + shadow)

**Podcasts Page (`/podcasts`):**

```
┌─────────────────────────────────────────────┐
│ Front-end Fire Section                     │
│ - Podcast logo/branding                    │
│ - Description: "A weekly podcast about     │
│   front-end news with Jack Herrington,    │
│   TJ VanToll, and Paige Niedringhaus"     │
│ - Links: Spotify, Apple, YouTube, RSS     │
│ - Latest 5 episodes (cards)               │
│ - [Visit Front-end Fire →]                │
│   (links to https://front-end-fire.com/)  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ PodRocket Section                          │
│ - Description: "Regular co-host on         │
│   LogRocket's PodRocket podcast"          │
│ - Latest PodRocket episodes (filterable)  │
│ - [View all episodes →]                   │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ React Round Up (Collapsed/Expandable)      │
│ - "Co-hosted React Round Up podcast       │
│   2020-2023"                               │
│ - [Expand to view archives ▼]             │
└─────────────────────────────────────────────┘
```

**About Page (`/about`):**
- Current role: Lead Software Engineer @ AllSpice (starting 2026)
- Previous role: Staff Software Engineer @ Blues (4.5 years)
- Side projects: Front-end Fire podcast (3 years), blog
- Personal background
- Skills/technologies
- Optional: Personal photos, fun facts
- CTA: Link to blog, podcasts, contact

**Contact Page (`/contact`):**
- Keep current contact form
- Email: hellopaigen@gmail.com
- Social links
- Optional: Availability/response time note

**Archive Page (`/archive`):**

Organized into collapsible/accordion sections:

1. **Course (2021)**
   - "The newline Guide to Modernizing an Enterprise React App"
   - Note: "Written in 2021, some content may be outdated, but I'm still proud of this work!"
   - Link to course page
   - Preview videos

2. **Talks & Videos**
   - List of conference/meetup talks
   - Recorded videos hyperlinked
   - Sorted by date (newest first)

3. **Guest Podcast Appearances**
   - Podcast episodes where Paige was interviewed
   - Exclude PodRocket episodes (those are on Podcasts page)
   - JavaScript Jabber, My JavaScript Story, React Round Up, etc.

4. **Company Articles**
   - Articles written for ButterCMS, LogRocket, newline, Blues
   - Organized by company with logos
   - Links to external articles

**Individual Blog Post Page (`/blog/[slug]`):**
- Full-width hero with featured image
- Article metadata (date, reading time, tags, category)
- Table of contents (generated from headings)
- Article content with syntax highlighting
- Author bio at bottom
- Social share buttons
- "Related posts" section
- Reading progress indicator (sticky header)
- "Copy link" button

### 2.2 Design System

**Status:** ✅ Complete — CSS custom properties, dark mode colors, and design tokens all in `src/styles/global.css`

#### Color Palette

**Selected: Option A - Modern Minimal**

**Light Mode:**
- **Primary:** Deep indigo `#3730a3`
- **Accent:** Vibrant pink `#ec4899`
- **Secondary:** Soft purple `#8b5cf6`
- **Background:** Off-white `#fafafa`
- **Surface:** White `#ffffff`
- **Text Primary:** Dark gray `#1f2937`
- **Text Secondary:** Medium gray `#6b7280`
- **Border:** Light gray `#e5e7eb`

**Dark Mode:**
- **Primary:** Lighter indigo `#818cf8` (brightened from #6366f1 for WCAG contrast)
- **Accent:** Bright pink `#f472b6`
- **Secondary:** Light purple `#c4b5fd` (brightened from #a78bfa for WCAG contrast)
- **Background:** Rich navy `#0f172a`
- **Surface:** Dark slate `#1e293b`
- **Text Primary:** Off-white `#f1f5f9`
- **Text Secondary:** Light gray `#cbd5e1`
- **Border:** Dark gray `#334155`

**Theme Variables (CSS Custom Properties):**
```css
/* src/styles/theme.css */
:root {
  --color-primary: #3730a3;
  --color-accent: #ec4899;
  --color-secondary: #8b5cf6;
  --color-bg: #fafafa;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-text-secondary: #6b7280;
  --color-border: #e5e7eb;
}

[data-theme="dark"] {
  --color-primary: #818cf8;
  --color-accent: #f472b6;
  --color-secondary: #c4b5fd;
  --color-bg: #0f172a;
  --color-surface: #1e293b;
  --color-text: #f1f5f9;
  --color-text-secondary: #cbd5e1;
  --color-border: #334155;
}
```

#### Typography

**Font Stack:**
- **Headings:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Body:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Code:** `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`

**Font Sizes (Tailwind-inspired scale):**
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

**Line Heights:**
- Body text: 1.6
- Headings: 1.2
- Code: 1.5

**Font Weights:**
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700

#### Spacing System

**Based on 4px base unit:**
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
```

#### Layout Constants

```css
--content-width: 1200px;
--content-width-narrow: 720px;
--content-width-wide: 1400px;
--header-height: 64px;
--border-radius-sm: 0.375rem;  /* 6px */
--border-radius: 0.5rem;       /* 8px */
--border-radius-lg: 0.75rem;   /* 12px */
--border-radius-xl: 1rem;      /* 16px */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
```

#### Component Patterns

**Blog Post Card:**
```
┌─────────────────────────────────┐
│  [Featured Image]               │ (aspect-ratio: 16/9)
├─────────────────────────────────┤
│  [Category Badge]               │ (top-left, absolute)
│                                 │
│  Title (text-xl, bold)          │
│  Excerpt (text-base, 2 lines)   │
│                                 │
│  ─────────────────────────────  │
│  Date • Read time • [Tag] [Tag] │
└─────────────────────────────────┘

States:
- Hover: lift (translateY(-4px)) + shadow-lg
- Transition: all 0.2s ease
```

**Podcast Episode Card:**
```
┌──────────────────────────────────┐
│ [🎙️ Podcast Logo] Episode #123  │
│                                  │
│ Episode Title Here               │ (text-lg, bold)
│ Brief description of the         │ (text-sm, 3 lines)
│ episode content...               │
│                                  │
│ Jan 15, 2026 • 45 min            │
│                [Listen →]        │ (accent color button)
└──────────────────────────────────┘
```

**Tag Badge:**
```css
.tag {
  background: var(--color-secondary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: var(--text-sm);
  font-weight: 500;
}
```

**Category Badge:**
```css
.category {
  background: var(--color-accent);
  color: white;
  padding: 0.375rem 1rem;
  border-radius: var(--border-radius);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}
```

### 2.3 Interactive Features

#### Light/Dark Mode Toggle

**Implementation:**
- [x] ✅ Add theme toggle button to header (sun/moon icon)
- [x] ✅ Use `localStorage` to persist theme preference
- [x] ✅ Respect `prefers-color-scheme` media query on first visit
- [x] ✅ Smooth transition between themes (200ms)
- [x] ✅ Update all colors using CSS custom properties

**Code snippet:**
```javascript
// src/scripts/theme.js
const theme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', theme);

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}
```

#### Blog Post Features

- [ ] **Reading Progress Indicator**
  - Sticky header with progress bar
  - Updates as user scrolls
  - Inspired by Josh Comeau's implementation

- [ ] **Copy Link Button**
  - Button in post header to copy permalink
  - Toast notification on copy success

- [ ] **Table of Contents**
  - Auto-generated from H2/H3 headings
  - Sticky sidebar on desktop
  - Highlights current section on scroll

- [ ] **Social Share Buttons**
  - Twitter, LinkedIn, Facebook, Copy Link
  - Sticky or at top/bottom of post

- [ ] **Related Posts**
  - 3 related posts at bottom based on tags/category
  - Exclude current post

#### Blog Listing Features

- [ ] **Tag Filter**
  - Horizontal scrollable tag bar
  - Active tag highlights
  - "Clear filters" button
  - URL updates with selected tag (e.g., `/blog?tag=react`)

- [ ] **Search** _(Skipped for v1 - using tag filtering instead)_
  - No client-side search tool implementation
  - Simple tag filtering provides adequate discovery
  - Can add full-text search in future version if needed

- [ ] **Pagination**
  - 9 posts per page
  - Previous/Next buttons
  - Page numbers
  - Smooth scroll to top on page change

#### Hover Animations

```css
/* Card hover effect */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Link hover effect */
a {
  transition: color 0.15s ease;
}

a:hover {
  color: var(--color-accent);
}

/* Button hover effect */
button {
  transition: background-color 0.2s ease, transform 0.1s ease;
}

button:hover {
  background-color: var(--color-primary-dark);
  transform: scale(1.02);
}

button:active {
  transform: scale(0.98);
}
```

### 2.4 Navigation Design

#### Desktop Header
```
┌─────────────────────────────────────────────────────┐
│ [Logo/Name]    Blog Podcasts About Contact Archive │
│                                        [🌙] [🔗🔗🔗] │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 64px
- Sticky on scroll
- Background: `var(--color-surface)` with backdrop blur
- Box shadow on scroll: `var(--shadow-sm)`
- Logo/name links to homepage
- Nav links centered or right-aligned
- Theme toggle + social icons on far right
- Active page underline (accent color)

#### Mobile Header & Menu
```
┌─────────────────────────────────────┐
│ [Logo/Name]              [☰]       │
└─────────────────────────────────────┘

[When menu open - full-screen overlay]
┌─────────────────────────────────────┐
│                          [✕]        │
│                                     │
│          Blog                       │
│          Podcasts                   │
│          About                      │
│          Contact                    │
│          Archive                    │
│                                     │
│          [🌙] [🔗🔗🔗]              │
└─────────────────────────────────────┘
```

**Specifications:**
- Hamburger menu (☰) on mobile (<768px)
- Full-screen overlay with fade-in animation
- Large, touch-friendly nav links
- Close button (✕) in top right
- Theme toggle and social links at bottom
- Smooth open/close transitions (300ms)
- Body scroll lock when menu open

#### Footer
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Paige Niedringhaus                                │
│  Lead Software Engineer @ AllSpice                 │
│                                                     │
│  [Blog] [Podcasts] [About] [Contact] [Archive]    │
│  [RSS] [Sitemap]                                   │
│                                                     │
│  [🔗] [🔗] [🔗] [🔗] [🔗]                          │
│  (GitHub, X, Medium, DEV, Email)                   │
│                                                     │
│  © 2026 Paige Niedringhaus                         │
│  Built with Astro                                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: `var(--color-surface)`
- Border top: 1px solid `var(--color-border)`
- Padding: 3rem vertical
- Content max-width: 1200px, centered
- Links in grid or flex layout
- Social icons with hover effects

### 2.5 Responsive Design Breakpoints

```css
/* Mobile first approach */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

**Grid Layouts:**

| Element | Mobile (<768px) | Tablet (768-1024px) | Desktop (>1024px) |
|---------|----------------|---------------------|-------------------|
| Blog post cards | 1 column | 2 columns | 3 columns |
| Featured content | 1 column | 2 columns | 3 columns |
| Podcast episodes | 1 column | 1 column | 2 columns |
| Archive sections | 1 column | 1 column | 2 columns |

**Font Size Adjustments:**
- Mobile: Reduce headings by 20-30%
- Increase line height for readability
- Ensure minimum 44x44px touch targets

**Navigation:**
- Desktop: Horizontal nav bar
- Mobile: Hamburger menu with full-screen overlay

### 2.6 Content Updates

#### General Content Review
- [ ] **Review all page content for accuracy and currency**
  - Go through About, Contact, Courses, Media, and all other pages
  - Update job information, technologies, personal details
  - Ensure content reflects who you are and where you're at today
  - Remove or update outdated information
  - Verify all external links still work

#### Update About Page
- [x] ✅ AllSpice current role present
- [x] ✅ Blues previous role present
- [x] ✅ Added Front-end Fire and PodRocket co-hosting paragraph

#### Update Homepage
- [x] ✅ Hero section: "Full-Stack Software Engineer" title (no company), photo, tagline, social links
- [x] ✅ Featured content: Latest blog post (with thumbnail) + Front-end Fire (horizontal logo card)
- [x] ✅ Recent posts grid: 6 posts using PostCard component
- [x] ✅ Newsletter signup at bottom

#### Create Podcasts Page
- [x] ✅ Add Front-end Fire section with podcast description and link to https://front-end-fire.com/
- [x] ✅ Add PodRocket section with co-hosted episodes filtered from `data/podcasts.js` (type: 'cohost')
- [x] ✅ Add React Round Up historical section with external link

#### Create Archive Page
- [x] ✅ Courses section with newline course card + YouTube video grid (collapsible)
- [x] ✅ Talks & Videos section from `speaking.js`, excluding course videos (collapsible)
- [x] ✅ Guest Podcast Appearances section filtered from `podcasts.js` (type: 'guest', collapsible)
- [x] ✅ Published Articles section grouped by company (Blues, newline, LogRocket, ButterCMS), newest-first (collapsible)
- [x] ✅ 301 redirects added: `/courses` → `/archive`, `/media` → `/archive`

### 2.7 Design Inspiration Reference

**From Josh Comeau (https://www.joshwcomeau.com/):**
- Dark mode with sophisticated color mapping
- Playful SVG illustrations
- Reading progress indicator
- Whimsical design elements
- Interactive code demonstrations
- Clear content hierarchy

**From Adam Argyle (https://nerdy.dev/):**
- Dark/night mode as primary
- Topic filtering with live interactions
- Personality-driven design
- Chronological browsing options
- Minimal, function-focused design
- Playful coding conventions

**From Una Kravets (https://una.im/):**
- Light/dark theme toggle
- Personalized imagery
- Playful audio interactions
- Emoji-enhanced sections
- Modern, tech-focused aesthetic
- Unicorn branding/personality

**From Tania Rascia (https://www.taniarascia.com/):**
- Clean, minimal design
- Muted, calming color palette
- Excellent readability
- Content-focused layout
- Anchored headings
- Responsive, accessible design

**From Front-end Fire (https://front-end-fire.com/):**
- Simple, podcast-focused design
- Episode cards with clear metadata
- Multiple platform links (Apple, Spotify, YouTube, RSS)
- Host identification
- Orange/warm color accent
- Clean typography and spacing

### 2.8 Accessibility Checklist

- [ ] All interactive elements keyboard accessible
- [ ] Focus states visible and clear
- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] Alt text on all images
- [ ] Semantic HTML throughout
- [ ] Skip to content link
- [ ] ARIA labels where appropriate
- [ ] Form labels properly associated
- [ ] No text in images (or provide alt text)
- [ ] Heading hierarchy logical (h1 → h2 → h3)
- [ ] Test with screen reader (VoiceOver/NVDA)

### 2.9 Performance Targets

**Lighthouse Scores (Mobile):**
- Performance: > 95
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Optimization Strategies:**
- Use Astro's `<Image />` for automatic optimization
- Lazy load images below the fold
- Minimize JavaScript (leverage Astro's zero-JS by default)
- Inline critical CSS
- Use system fonts or subset Google Fonts
- Enable compression (Brotli/Gzip) on Netlify
- Optimize SVG assets
- Use CDN for static assets (Netlify handles this)

### 2.10 Redesign Testing Checklist

Before deploying redesign:

**Visual Testing:**
- [ ] All pages render correctly in light mode
- [ ] All pages render correctly in dark mode
- [ ] Theme toggle works on all pages
- [ ] Smooth transitions between themes
- [ ] All components match design system
- [ ] Typography consistent across site
- [ ] Spacing consistent across site
- [ ] Colors consistent across site

**Responsive Testing:**
- [ ] Test on mobile (375px, 414px widths)
- [ ] Test on tablet (768px, 1024px widths)
- [ ] Test on desktop (1280px, 1920px widths)
- [ ] Hamburger menu works on mobile
- [ ] All touch targets > 44x44px on mobile
- [ ] Images responsive and don't overflow
- [ ] Text readable at all sizes

**Functional Testing:**
- [ ] All navigation links work
- [ ] Tag filtering works on blog
- [ ] Pagination works on blog
- [ ] Reading progress indicator works
- [ ] Copy link button works
- [ ] Social share buttons work
- [ ] Related posts display correctly
- [ ] Contact form works
- [ ] Newsletter signup form works
- [ ] External links open in new tab

**Cross-Browser Testing:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

**Performance Testing:**
- [ ] Run Lighthouse on all major pages
- [ ] Check bundle size (should be minimal with Astro)
- [ ] Test on slow 3G connection
- [ ] Verify images optimized and lazy loaded

---

## Appendix

### Current Site Structure (Gatsby)

```
src/
├── components/
│   ├── Layout/
│   ├── Header/
│   ├── Footer/
│   ├── PostCard/
│   ├── VideoCard/
│   ├── SEO/
│   └── ... (14+ components)
├── pages/
│   ├── index.js (homepage)
│   ├── blog.js (blog listing)
│   ├── about.js
│   ├── contact.js
│   ├── courses.js
│   ├── media.js
│   └── 404.js
├── templates/
│   └── post.jsx (blog post template)
└── styles/
    └── *.scss files

data/
├── SiteConfig.js
├── courses.js
├── courseVideos.js
├── mediumBlogs.js
├── podcasts.js
├── publications.js
└── speaking.js

content/ (Git submodule)
└── posts/
    └── *.md (markdown blog posts)
```

### Target Site Structure (Astro)

```
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── PostCard.astro
│   ├── PodcastCard.astro
│   ├── VideoCard.astro
│   ├── SEO.astro
│   ├── ThemeToggle.astro
│   ├── TagFilter.astro
│   ├── ReadingProgress.astro
│   └── ... (convert from React)
├── layouts/
│   ├── Layout.astro (base layout)
│   ├── BlogPost.astro (blog post layout)
│   └── Page.astro (generic page layout)
├── pages/
│   ├── index.astro (homepage)
│   ├── blog/
│   │   ├── index.astro (listing)
│   │   └── [slug].astro (dynamic posts)
│   ├── podcasts.astro (NEW)
│   ├── about.astro
│   ├── contact.astro
│   ├── archive.astro (NEW)
│   ├── rss.xml.js
│   └── 404.astro
├── content/
│   ├── config.ts (content collections schema)
│   └── posts/ (Git submodule, markdown files)
├── data/
│   └── *.js or *.ts (site data)
├── styles/
│   ├── global.css
│   ├── theme.css (CSS custom properties)
│   └── utilities.css (optional utility classes)
└── scripts/
    └── theme.js (dark mode logic)
```

### Key Dependencies

**Current (Gatsby):**
- gatsby: 4.13.1
- react: 18.1.0
- gatsby-transformer-remark: 5.13.0
- Various gatsby-remark-* plugins
- sass: 1.80.3
- FontAwesome React components

**Current (Astro):**
- astro: 5.17.1
- @astrojs/mdx: 4.3.13
- @astrojs/sitemap: 3.7.0
- @astrojs/rss: 4.0.15
- @astrojs/check: 0.9.6
- typescript: 5.9.3
- eslint: 9.39.2 with flat config
- moment: 2.24.0 (TODO: replace with date-fns or Temporal API)
- markdown-it: 14.1.0 (for RSS feed HTML content)
- sanitize-html: 2.17.0 (for RSS feed security)
- Native CSS (no preprocessor needed)
- rehype-autolink-headings, rehype-slug, rehype-external-links
- remark-gfm, remark-transform-image-paths (custom plugin)
- **No React** - All components are native Astro components
- **Total packages:** 1,493 (down from 3,046 with Gatsby)

### Git Submodule Details

**Current setup:**
- Submodule path: `content/`
- Repository: `git@github.com:paigen11/pn-blog-posts.git`
- Branch: `main`

**No changes needed:** Astro will read from the same `content/` directory that Gatsby uses.

### Deployment Configuration

**Netlify:**
- Current branch: `master`
- Build command: `gatsby build` → Change to `npm run build` (Astro)
- Publish directory: `public` → Change to `dist`
- Node version: 18 → Upgrade to **24 (latest LTS)**
- Git submodules enabled: Yes (keep)

### Front-end Fire Integration

**Strategy for promoting Front-end Fire:**
- Dedicated hero section on `/podcasts` page
- Link to https://front-end-fire.com/ (Astro site)
- Could fetch latest episodes from RSS feed (optional)
- Or manually curate/highlight latest episodes
- Emphasize that it's entering 3rd year of weekly episodes

**Consider:**
- Embedding audio player on site (iframe from Buzzsprout?)
- Or just link out to external podcast platforms
- Consistency with Front-end Fire's orange branding

---

## Timeline Estimates

### Phase 1: Gatsby → Astro Migration
- **Week 1:** Setup, content collections, markdown plugins
- **Week 2:** Pages, routing, blog post generation
- **Week 3:** Components, styling, features (RSS, sitemap)
- **Week 4:** Testing, deployment, bug fixes
- **Total:** ~4 weeks

### Phase 2: Redesign
- **Week 1:** Design system implementation (colors, typography, spacing)
- **Week 2:** Homepage, navigation, footer redesign
- **Week 3:** Blog page redesign, tag filtering, new Podcasts page
- **Week 4:** Archive page, About updates, final polish
- **Week 5:** Testing, accessibility audit, performance optimization
- **Total:** ~5 weeks

**Grand Total:** ~9 weeks for full migration + redesign

---

## Notes & Open Questions

1. **Search functionality:** ✅ **DECIDED** - No client-side search tool (Pagefind) for v1. Just tag filtering and basic title/subtitle search on blog listing page
2. **Front-end Fire episodes:** Fetch from RSS or manually curate?
3. **Blog post images:** ✅ **DECIDED** - Keep in submodule for easy single-repo updates (add posts + images together)
4. **Analytics:** ✅ **DECIDED** - GA4 only (remove old Google Analytics)
5. **Newsletter signup:** ✅ **DECIDED** - Keep on homepage
6. **Course videos:** ✅ **DECIDED** - Already links to YouTube/course page, no embedding needed
7. **Styling approach:** ✅ **DECIDED** - Modern native CSS (no preprocessor, no Tailwind)
8. **Blog post format:** ✅ **DECIDED** - Selective conversion: keep most as `.md`, convert ~13-15 posts with embeds to `.mdx`
9. **Node version:** ✅ **DECIDED** - Upgrade to Node 24 LTS
10. **TypeScript:** ✅ **DECIDED** - Convert site to TypeScript during migration for better type safety

---

## Future Improvements & Technical Debt

### Improve Homepage Social Icons

**Priority:** Medium
**Current:** Social links in hero use emoji/Unicode symbols (⚙, 𝕏, M, ⌨, ✉, 📡) which look disjointed and inconsistent.
**Recommended:** Replace with a consistent inline SVG icon set. Options:
- Hand-rolled inline SVGs for each platform (GitHub, X, Medium, DEV, Email, RSS)
- Use a small icon library that supports tree-shaking (e.g., Iconoir, Heroicons, or Lucide — no FontAwesome per CLAUDE.md)

**Files affected:** `src/pages/index.astro` (socialLinks array + icon rendering)

---

### Replace Moment.js with Modern Date Handling

**Priority:** Medium
**Current:** Using `moment@2.24.0` (outdated, heavy library)
**Recommended:** Use native JavaScript `Temporal API` (when stable) or `date-fns` as interim solution

**Files using moment:**
- `src/data/mediumBlogs.js`
- `src/data/speaking.js`
- `src/data/courses.js`
- `src/data/courseVideos.js`
- `src/data/podcasts.js`
- `src/data/publications.js`

**Why:**
- Moment.js is in maintenance mode (no new features since 2020)
- Large bundle size (~70KB minified)
- Native Temporal API offers better performance and is the future standard
- date-fns is tree-shakeable and modern

**Migration options:**
1. **Best (future-proof):** Wait for Temporal API to reach Stage 4 and use that
2. **Good (now):** Migrate to `date-fns` - modern, tree-shakeable, actively maintained
3. **Quick (now):** Use native `Date` with `Intl.DateTimeFormat` for formatting

**Effort:** Low-Medium (mostly find/replace in data files)

### Post-Migration Enhancements

These improvements should be implemented after the initial Astro migration is merged and deployed.

#### 1. Blog Post Enhancements

**Priority:** High

- [ ] **Add hero/featured images to individual blog post pages**
  - Display `featuredImage` from frontmatter at the top of blog posts
  - Use Astro's `<Image />` component for optimization
  - Responsive image sizing across devices
  - Fallback to default image if none specified

- [ ] **Display tags on individual blog post pages**
  - Show tags at top or bottom of blog post content
  - Link tags to filtered blog listing (e.g., `/blog?tag=react`)
  - Consistent styling with tag badges elsewhere on site

- [ ] **Add reading time to blog posts**
  - Calculate estimated reading time based on word count
  - Display on both blog listing cards and individual post pages
  - Format as "X min read" (e.g., "5 min read")

- [ ] **Add sticky table of contents to blog posts**
  - Auto-generate TOC from H2 and H3 headings in post content
  - Display as sticky sidebar on desktop (right side or left side)
  - Make TOC links clickable to scroll to corresponding heading
  - Highlight current section as user scrolls
  - Hide on mobile or show as collapsible section at top

- [ ] **Improve blog post metadata display**
  - Enhance visual hierarchy of post header
  - Better category badge positioning
  - Improve date formatting

**Why:** These features will improve the blog reading experience, help readers discover related content through tags and featured images, and make it easier to navigate long-form articles.

#### 2. CSS Consolidation

**Priority:** Medium

- [ ] **Audit all pages for duplicate CSS**
  - Review scoped styles in all `.astro` components
  - Identify repeated patterns (cards, buttons, spacing)
  - Document common styles that should be extracted

- [ ] **Extract common styles to shared files**
  - Move duplicate component styles to `src/styles/components.css`
  - Create utility classes for common patterns (if needed)
  - Ensure design token usage is consistent (CSS custom properties)

- [ ] **Ensure consistent spacing, colors, typography across pages**
  - Verify all pages use spacing variables (`--space-*`)
  - Verify all pages use color variables (`--color-*`)
  - Check font sizes, weights, and line heights are consistent
  - Test light/dark mode consistency across all pages

**Why:** Reduces CSS duplication, improves maintainability, ensures visual consistency, and reduces bundle size.

#### 3. Enhanced Search Functionality

**Priority:** Low

- [ ] **Evaluate search solutions**
  - Consider Pagefind (client-side static search)
  - Consider Algolia or similar hosted search
  - Or implement simple title/content search with JavaScript

- [ ] **Enhance existing tag filtering**
  - Add search input box on blog listing page
  - Filter posts by title or subtitle in real-time
  - Combine with existing tag filtering
  - Update URL parameters for shareable filtered views

- [ ] **Test search performance**
  - Ensure search doesn't impact page load time
  - Test with large number of blog posts
  - Verify mobile performance

**Why:** While basic tag filtering is functional, full-text search would improve content discoverability, especially as the blog grows.

---

**End of Plan Document**

---

*This plan will be updated as we make progress. Check back regularly for status updates and adjustments.*
