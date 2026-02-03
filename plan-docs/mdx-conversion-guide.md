# MDX Conversion Guide for Blog Posts with Embeds

This guide documents which blog posts need to be converted from `.md` to `.mdx` to support YouTube, CodePen, and CodeSandbox embeds.

**Total posts to convert:** 14

## Conversion Steps

For each post listed below:

1. **Rename the file** from `.md` to `.mdx`
2. **Add component imports** after the frontmatter closing `---`:
   ```mdx
   import YouTube from '../../src/components/YouTube.astro';
   import CodePen from '../../src/components/CodePen.astro';
   import CodeSandbox from '../../src/components/CodeSandbox.astro';
   ```
   (Only import the components you need for that specific post)
3. **Replace embed syntax** as shown in the patterns below
4. **Commit and push** in the submodule repo
5. **Update main repo** with `git submodule update --remote`

---

## Embed Replacement Patterns

### YouTube Embeds

**Find:**
```
`youtube: https://www.youtube.com/watch?v=VIDEO_ID`
```

**Replace with:**
```mdx
<YouTube url="https://www.youtube.com/watch?v=VIDEO_ID" />
```

### CodePen Embeds

**Find:**
```
https://codepen.io/USERNAME/pen/PEN_ID
```

**Replace with:**
```mdx
<CodePen url="https://codepen.io/USERNAME/pen/PEN_ID" />
```

### CodeSandbox Embeds

**Find:**
```html
<iframe src="https://codesandbox.io/p/devbox/SANDBOX_ID?embed=1&file=%2Fsrc%2Fpages%2Findex.tsx"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="..."
     allow="..."
     sandbox="...">
</iframe>
```

**Replace with:**
```mdx
<CodeSandbox url="https://codesandbox.io/p/devbox/SANDBOX_ID" file="/src/pages/index.tsx" />
```

---

## Posts to Convert

### 1. `2019-06-23-css-viewport-units.md`
**Embeds:** 3 CodePen
**CodePen URLs:**
- Line 78: `https://codepen.io/paigen11/pen/OemmKV`
- Line 88: `https://codepen.io/paigen11/pen/pXPpoO`
- Line 105: `https://codepen.io/paigen11/pen/WqjMNB`

---

### 2. `2020-01-20-css-media-queries-react.md`
**Embeds:** 2 CodePen
**CodePen URLs:**
- Line 121: `https://codepen.io/paigen11/pen/KKwGbJw`
- Line 139: `https://codepen.io/paigen11/pen/BayqMzX`

---

### 3. `2021-12-16-build-a-gatsby-blog-post-filter.md`
**Embeds:** 1 YouTube
**YouTube URL:**
- `youtube: https://www.youtube.com/watch?v=rjYVvBNsJVM`

---

### 4. `2022-01-18-create-an-asset-tracker-map-with-nextjs-react-leaflet.md`
**Embeds:** 1 YouTube
**YouTube URL:**
- `youtube: https://www.youtube.com/watch?v=uUJiX9q8x9M`

---

### 5. `2022-03-10-build-and-custom-style-recharts.md`
**Embeds:** 1 YouTube
**YouTube URL:**
- `youtube: https://www.youtube.com/watch?v=uUJiX9q8x9M`

---

### 6. `2022-04-04-customize-complex-data-in-react-table.md`
**Embeds:** 1 YouTube
**YouTube URL:**
- `youtube: https://www.youtube.com/watch?v=uUJiX9q8x9M`

---

### 7. `2022-05-14-use-css-grid-to-make-a-fixed-sidebar-with-scrollable-body.md`
**Embeds:** 1 YouTube
**YouTube URL:**
- `youtube: https://www.youtube.com/watch?v=mXR8hBspl90`

---

### 8. `2022-09-05-change-svg-color-with-css-filter.md`
**Embeds:** 1 YouTube + 2 CodePen
**YouTube URL:**
- `youtube: https://www.youtube.com/watch?v=yvoxS52JyoM`
**CodePen URLs:**
- `https://codepen.io/paigen11/pen/VwXejoq`
- `https://codepen.io/paigen11/pen/ExEmgBj`

---

### 9. `2022-10-23-rely-on-intersection-observer-trigger-events-based-on-view.md`
**Embeds:** 1 YouTube
**YouTube URL:**
- `youtube: https://www.youtube.com/watch?v=hGoPT3gLRyw`

---

### 10. `2022-12-18-show-child-element-in-dom-hovering-parent-container.md`
**Embeds:** 1 YouTube
**YouTube URL:**
- `youtube: https://www.youtube.com/watch?v=hGoPT3gLRyw`

---

### 11. `2024-08-23-animate-carousel-with-html-css.md`
**Embeds:** 1 YouTube
**YouTube URL:**
- `youtube: https://youtu.be/sKUxi9RTya8`

---

### 12. `2025-01-24-custom-antd-time-slider-component.md`
**Embeds:** 1 YouTube + 1 CodeSandbox
**YouTube URL:**
- `youtube: https://www.youtube.com/watch?v=gepDm1x5rJQ`
**CodeSandbox:**
- Line 622: `<iframe src="https://codesandbox.io/p/devbox/custom-time-slider-nextjs-ant-design-kcxm75?embed=1&file=%2Fsrc%2Fpages%2Findex.tsx"`
- Replace with: `<CodeSandbox url="https://codesandbox.io/p/devbox/custom-time-slider-nextjs-ant-design-kcxm75" file="/src/pages/index.tsx" />`

---

### 13. `2025-03-19-react-plotlyjs-cross-linked-charts.md`
**Embeds:** 1 YouTube + 1 CodeSandbox
**YouTube URL:**
- `youtube: https://youtu.be/2Sm1b7V5e3E`
**CodeSandbox:**
- Line 360: `<iframe src="https://codesandbox.io/p/devbox/cross-link-plotlyjs-charts-dj78t3?embed=1&file=%2Fsrc%2Fpages%2Findex.tsx"`
- Replace with: `<CodeSandbox url="https://codesandbox.io/p/devbox/cross-link-plotlyjs-charts-dj78t3" file="/src/pages/index.tsx" />`

---

### 14. `2025-05-20-react-plotlyjs-persist-map-state.md`
**Embeds:** 1 YouTube + 1 CodeSandbox
**YouTube URL:**
- `youtube: https://youtu.be/2Sm1b7V5e3E`
**CodeSandbox:**
- Line 340: `<iframe src="https://codesandbox.io/p/devbox/resize-plotlyjs-react-maps-dpzl6y?embed=1&file=%2Fsrc%2Fpages%2Findex.tsx"`
- Replace with: `<CodeSandbox url="https://codesandbox.io/p/devbox/resize-plotlyjs-react-maps-dpzl6y" file="/src/pages/index.tsx" />`

---

## Example Conversion

**Before (in `.md` file):**
```markdown
---
title: "My Blog Post"
date: "2022-01-01"
---

Here's a great video:

`youtube: https://www.youtube.com/watch?v=ABC123`

And here's a CodePen:

https://codepen.io/paigen11/pen/XYZ789

And here's a CodeSandbox:

<iframe src="https://codesandbox.io/p/devbox/my-sandbox-abc123?embed=1&file=%2Fsrc%2Findex.tsx"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="My Sandbox"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
</iframe>
```

**After (in `.mdx` file):**
```mdx
---
title: "My Blog Post"
date: "2022-01-01"
---

import YouTube from '../../src/components/YouTube.astro';
import CodePen from '../../src/components/CodePen.astro';
import CodeSandbox from '../../src/components/CodeSandbox.astro';

Here's a great video:

<YouTube url="https://www.youtube.com/watch?v=ABC123" />

And here's a CodePen:

<CodePen url="https://codepen.io/paigen11/pen/XYZ789" />

And here's a CodeSandbox:

<CodeSandbox url="https://codesandbox.io/p/devbox/my-sandbox-abc123" file="/src/index.tsx" />
```

---

## After Conversion

Once all posts are converted in the submodule:

1. Delete the test file `src/content/posts/test-mdx-post.mdx` from the main repo
2. Run `git submodule update --remote` in the main repo
3. Verify all embeds render correctly
4. Update the migration plan document to mark this task complete
