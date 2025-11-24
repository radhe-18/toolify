# AI Tools Directory (Next.js 14 + Tailwind)

A clean, responsive directory of AI tools with search, categories, tags, filters, favorites (localStorage), dark mode, and SEO.

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Build for production
npm run build && npm start
```

Open http://localhost:3000

## Features
- Next.js 14 (App Router) + React 18
- Tailwind CSS styling
- Search, Category chips, Pricing filter, Tag filter
- Tool detail pages generated statically
- Favorites with localStorage
- Dark/Light theme toggle
- Simple, extensible data in `data/tools.json`
- SEO metadata

## Customize
- Add or edit tools in `data/tools.json`
- Tweak UI in `components/*`
- Add pages in `app/*`

## Deploy
- Vercel: Import the repo and deploy.
- Netlify: Use Next.js build preset.
- Any Node host: `npm run build && npm start`

## Env
No env is required by default. All data is static.
