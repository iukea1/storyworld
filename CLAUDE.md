# CLAUDE.md — StoryWorld

## Project Overview

StoryWorld is an AI-powered interactive storybook platform for children (ages 4–10). Kids co-author illustrated stories through voice/text input. Built with Next.js, React, and the Gemini AI API.

## Tech Stack

- **Framework:** Next.js 15 (App Router) with React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + PostCSS + Motion (Framer Motion)
- **AI:** Google Gemini API (`@google/genai`)
- **Icons:** Lucide React
- **Deployment:** Firebase / Google Cloud (standalone output)

## Project Structure

```
app/                  # Next.js App Router pages
  layout.tsx          # Root layout (fonts: Playfair Display, Lora, Nunito)
  page.tsx            # Landing page
  globals.css         # Tailwind v4 theme + custom colors/animations
  characters/         # Character selection page
  studio/             # Story creation/editing interface
  complete/           # Story completion/download page
components/           # Reusable React components
  CharacterCard.tsx   # Character card with theme support
  Logo.tsx            # Logo variants
  MagicCursor.tsx     # Animated particle cursor effect
  Starfield.tsx       # Animated starfield background
  PricingSection.tsx  # Pricing tier display
hooks/                # Custom React hooks
  use-mobile.ts       # Mobile detection (768px breakpoint)
lib/                  # Utilities
  utils.ts            # cn() — Tailwind className merge utility (clsx + twMerge)
```

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
npm run clean     # Clean Next.js cache
```

## Environment Variables

Set in `.env.local` (see `.env.example`):

- `GEMINI_API_KEY` — Gemini AI API key for story generation
- `APP_URL` — Application URL

## Code Conventions

### TypeScript & React

- Strict mode enabled; path alias `@/*` maps to project root
- Use `'use client'` directive for client components
- Type component props with explicit interfaces
- Use functional components with hooks

### Styling

- Tailwind CSS v4 with `@theme` syntax in `globals.css`
- Custom color palette: `warm-cream`, `ember`, `sunflower`, `horizon`, `candy`, `ink`, `parchment`
- Custom fonts: Playfair Display (headings), Lora (body), Nunito (UI)
- Responsive design with `md:` breakpoint (768px)

### Linting

- ESLint 9 flat config (`eslint.config.mjs`) extending Next.js defaults
- ESLint errors are **not** blocking builds (ignored in `next.config.ts`)
- TypeScript build errors **are** blocking

### Animation

- Use `motion` (Framer Motion) for component animations
- Custom `float` keyframe defined in globals.css

## Key Design Decisions

- **COPPA-compliant:** Child-safe, ad-free, parent-controlled
- **Standalone output:** `next.config.ts` sets `output: 'standalone'` for containerized deployment
- **No test suite:** No automated tests are currently configured
- **No CI/CD:** No GitHub Actions or pipeline configuration exists
- **Remote images:** `picsum.photos` is allowed in `next.config.ts` image domains
