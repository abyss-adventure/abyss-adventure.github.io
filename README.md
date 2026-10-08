# Abyss Adventure — Descent into the Abyss

A bilingual, native-scroll storytelling site for Phi Nguyễn's dark-fantasy dungeon RPG.

**Live:** https://abyss-adventure.github.io/

## Run

Node 22.12+ (Node 24 used for verification).

```sh
npm ci
npm run dev
npm run build
npm run check
npm run preview
```

Open the printed root URL directly. The site has a single route with section anchors. `npm run build` performs TypeScript checking and a production build.

## Architecture

React + TypeScript + Vite; GSAP ScrollTrigger controls the title push, source-to-world reveal and subtle portrait motion. Native browser scroll remains in control. CSS sticky scenes are short and disappear in reduced-motion mode. No WebGL, smoothing library or remote font request.

- `src/content.ts`: every EN/VI communication string, creator placeholders and release metadata.
- `src/App.tsx`: semantic scenes, selection controls, language persistence, one opt-in audio instance.
- `src/style.css`: typography, materials, responsive scenes, motion fallback and safe-area rules.
- `public/media/`: optimized copies of original game art and real Android captures.
- `public/asset-inventory.json`: original provenance, dimensions and sizes.
- `src/image-dimensions.json`: intrinsic dimensions prevent lazy-image layout shifts.
- `reports/`: visual evidence, runtime results and performance/acceptance notes.
- `PRODUCT.md`: confirmed product facts and open creator content.
- `DESIGN.md`: recorded visual system.

## Publish / Pages

Organization website repository: [`abyss-adventure/abyss-adventure.github.io`](https://github.com/abyss-adventure/abyss-adventure.github.io). Push to **main** triggers `.github/workflows/pages.yml`, installs locked dependencies, builds, checks and deploys to GitHub Pages. Pages source is GitHub Actions. The separate game repository and its branches are untouched.

Vite builds for organization-root Pages using `/`. If the site later moves to a project Pages URL, set `VITE_BASE_PATH=/repository-name/` for that build. Also update canonical/OG/JSON-LD URLs in `index.html`, `public/sitemap.xml`, `public/robots.txt`, and these docs. All runtime media use `import.meta.env.BASE_URL`; there are no app routes to need a SPA 404 workaround.

## Update content

See [CONTENT-EDITING.md](CONTENT-EDITING.md). Do not rewrite the UI to change release links or creator copy.

## QA

`npm run check` checks translation structure, canonical names, assets, release metadata and generated root asset paths. `node scripts/qa.mjs` runs Chrome and WebKit responsive interaction checks against the production preview on port4174 (override `QA_URL`). `node scripts/screens.mjs` captures the current local surface; adjust its URL if needed. Browser binaries are local QA dependencies, not deployment dependencies.

Original game artwork is preserved, not regenerated. The source-to-world sequence is a promotional explanation, **not an invented historical prototype**. Android captures contain genuine test UI. The Android download is an explicitly marked preview/test build, not a stable release. No public iOS download is offered.

Game content/art is attributed to its creator; this repository does not grant new reuse rights over the game assets.
