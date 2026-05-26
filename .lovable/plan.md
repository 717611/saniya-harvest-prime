## Diagnosis

The local `index.html` is already a **proper file** (1275 bytes, `100644 blob` in git) with the correct Vite SPA entry — `<div id="root">`, `<script type="module" src="/src/main.tsx">`, and the Google Fonts links. There is no `index.html/` directory anywhere in the repo.

So the EISDIR error is **not** a missing/broken file in the codebase. The most likely causes, in order:

1. **Stale Vercel build cache** — an earlier failed deploy created `index.html` as a directory inside the cached `dist/` (or `.vercel/output/`). New builds then trip on it.
2. **Wrong Framework Preset in Vercel** — if the project is set to a preset that conflicts with Vite (e.g. "Other" with custom output, or a leftover TanStack Start preset), the build can mis-handle `index.html`.
3. **Output directory mismatch** — Vite outputs to `dist/`, but Vercel may be looking elsewhere.

Since the file is already correct, just rewriting it locally will not fix the Vercel build. The fix needs to be done on both sides.

## Plan

### 1. Re-create `index.html` cleanly (defensive)

Even though it looks fine, delete and rewrite it so the new commit invalidates any path-based cache key on Vercel. Content stays identical to the current version:

- `<!doctype html>` + `<html lang="en">`
- meta charset/viewport, SEO title + description, og:* and twitter:* tags, canonical
- Google Fonts preconnect + Manrope + Poppins stylesheet
- `<body>` with `<div id="root"></div>` and `<script type="module" src="/src/main.tsx"></script>`

### 2. Add a `.vercelignore` to keep build inputs clean

Exclude `dist`, `.vercel`, `node_modules` so no stale local artifact accidentally gets uploaded:

```text
node_modules
dist
.vercel
```

### 3. Verify locally with a production build

Run `bun run build` and confirm `dist/index.html` is created as a file (not a directory). If this passes locally, the codebase is provably correct and any remaining failure is Vercel-side.

### 4. Vercel-side actions (user must do these — agent cannot)

These steps must be performed by the user in the Vercel dashboard. The agent can only fix the code:

- **Project Settings → General → Framework Preset:** set to **Vite**.
- **Build & Development Settings:**
  - Build Command: `bun run build` (or leave as preset default `vite build`)
  - Output Directory: `dist`
  - Install Command: `bun install` (or default)
- **Deployments → latest failed deploy → ⋯ menu → Redeploy → uncheck "Use existing Build Cache"**. This is the actual fix for EISDIR — it wipes the cached `index.html` directory.

### 5. Confirm `vercel.json` is correct for SPA

Current file is fine and stays:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## Files touched

- `index.html` — deleted and recreated identically (cache-busting commit)
- `.vercelignore` — created

## Files untouched

- `vercel.json`, `vite.config.ts`, `src/main.tsx`, `src/router.tsx`, `src/routes/**`, `src/components/**`, all assets and styles.

## Why not just "delete the directory"

There is no directory to delete in the repo — `ls -la index.html` shows a regular file and `git ls-tree` confirms it's a blob. Telling Vite/Vercel to "delete the index.html directory" locally would be a no-op. The directory only exists in Vercel's build cache, which is why step 4 (redeploy without cache) is the real fix.