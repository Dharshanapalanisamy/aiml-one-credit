# Darshana P S - Digital Portfolio

A modern, animated personal portfolio built with React, TypeScript, Vite, Tailwind CSS v4, and Motion.

## Overview

This project showcases:

- Hero introduction with animated typography and CTA
- Technical skills grouped by category
- Education and featured projects sections
- Certifications and activity highlights
- Contact-focused footer with social links

The UI uses custom theme tokens, ambient visual effects, and smooth motion-based transitions.

## Tech Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Motion (`motion/react`)
- Lucide React icons

## Project Structure

```text
.
|- index.html
|- package.json
|- tsconfig.json
|- vite.config.ts
|- README.md
`- src/
   |- App.tsx
   |- index.css
   `- main.tsx
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Starts Vite dev server on port 3000
- `npm run build` - Builds production bundle
- `npm run preview` - Previews production build locally
- `npm run lint` - Runs TypeScript checks (`tsc --noEmit`)
- `npm run clean` - Removes `dist` folder

## Styling and Theme

Theme variables and fonts are defined in `src/index.css` using Tailwind v4's `@theme` block:

- Fonts: Playfair Display, Plus Jakarta Sans
- Core colors: dark background, lavender accent, rose accent, text tones

You can customize the look by adjusting the `--color-*` and `--font-*` variables.

## Environment Variables

`vite.config.ts` exposes `GEMINI_API_KEY` through `process.env.GEMINI_API_KEY`.

Create a `.env.local` file only if your future features require it:

```env
GEMINI_API_KEY=your_api_key_here
```

If no AI feature is used in the UI, this variable can remain unset.

## Build for Production

```bash
npm run build
npm run preview
```

Generated files are output to the `dist` folder.

## Notes

- The portfolio is a single-page React application.
- External profile links and contact details are currently hardcoded in `src/App.tsx`.
- Update project entries, certifications, and social URLs directly in component content.
