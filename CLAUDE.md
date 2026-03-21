# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (runs `tsc && vite build`)
- **Lint:** `npm run lint` (ESLint, zero warnings policy)
- **Preview prod build:** `npm run preview`
- **Deploy:** `npm run deploy` (builds then deploys to GitHub Pages via gh-pages)

There are no tests configured in this project.

## Architecture

Single-page portfolio application built with **React 18 + TypeScript + Vite**. Styled with **SCSS + Bootstrap 5**. No routing library — navigation uses Bootstrap scroll-spy with anchor links to section IDs (`#home`, `#about`, `#skills`, etc.).

### Key directories

- `src/core/` — App entry point, TypeScript type declarations (`vite-env.d.ts` holds all shared interfaces)
- `src/components/` — React components (one per section: Projects, Skills, Feed, Contact, etc.)
- `src/layout/` — Page structure: Navbar, Header (hero), Footer
- `src/constants/` — **All content lives here as hardcoded TypeScript** — projects, articles, skills, nav items, config URLs
- `src/context/theme.tsx` — Dark/light mode via React Context
- `src/assets/scss/` — SCSS organized into `helpers/` (variables, dark mode, keyframes, utilities) and `layout/` (component styles)
- `src/assets/images/` — WebP images for projects and blog posts

### Content management

There is no CMS or markdown — all content is defined in `src/constants/`:
- `projects.tsx` — Project cards with MixItUp filter tags
- `feeds.ts` — Blog articles linking to external platforms (Dev.to, Medium)
- `index.tsx` — Skills list with react-icons components, organized by variant (frontend/backend/tool)
- `config.ts` — GitHub, LinkedIn URLs, contact email
- `about.ts` — About section feature items

### Key libraries & patterns

- **MixItUp** for project filtering (initialized via ref in `Projects.tsx`)
- **AOS** for scroll animations (initialized in `App.tsx`)
- **EmailJS** for contact form submissions — requires env vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_TEMPLATE_ID`
- **Typewriter Effect** in the hero section
- Icons come from **react-icons** — skill icons are stored as `{ name: Component, props: {...} }` in constants

### Styling conventions

- Bootstrap 5 imported via SCSS and used for grid, utilities, and tooltips
- Primary accent color: `$aurora-color: #12b886` (defined in `helpers/_variables.scss`)
- Dark mode toggles CSS variables (`--text-color`, `--bg-color`) via classes
- Fonts: Ubuntu (main), Lavishly Yours (cursive accent)

### Deployment

- Deployed to GitHub Pages at `https://mohammed-taysser.github.io/portfolio`
- Vite base path is `/portfolio` (configured in `vite.config.ts`)
- PWA-ready with `manifest.json` in public folder
