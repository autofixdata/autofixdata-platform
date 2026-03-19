# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   ├── autofixdata/        # Auto Fix Data marketing website (React + Vite)
│   └── mockup-sandbox/     # Component preview server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, scripts)
├── tsconfig.base.json      # Shared TS options
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## Auto Fix Data Website (artifacts/autofixdata)

Professional automotive workshop repair data marketing site for autofixdata.com.

### Pages (21 total)
- `/` — Homepage with hero, products, features, testimonials, FAQ
- `/products` — All 5 reseller products overview
- `/alldata` — ALLDATA dedicated product page
- `/autodata` — AutoData dedicated product page
- `/haynes-pro` — Haynes Pro dedicated product page
- `/mitchell1` — Mitchell1 dedicated product page
- `/identifix` — Identifix dedicated product page
- `/pricing` — Subscription plans (Individual £99/mo, Garage £199/mo, Fleet custom)
- `/free-trial` — Conversion page with Formspree form
- `/alldata-alternative` — SEO page (181K impressions target)
- `/autodata-alternative` — SEO page (79K impressions target)
- `/mitchell1-alternative` — SEO page (40K impressions target)
- `/haynespro-alternative` — SEO page (25K impressions target)
- `/identifix-alternative` — SEO page (15K impressions target)
- `/repair-manuals` — OEM data overview + makes grid
- `/diagnostics` — DTC code library overview
- `/wiring-diagrams` — Wiring database overview
- `/about` — Company story, markets, values
- `/contact` — Contact form + office info
- `/blog` — Article grid with category filters
- `*` — 404 branded error page

### Brand System
- Primary yellow: #F5C400 (CTAs, accents)
- Dark navy: #0D1F30 (hero, footer, dark sections)
- Darkest bg: #060E1A (stats bar, makes bar)
- Professional blue: #1A4A7A (links, headings)
- Body text: #444444
- Fonts: Inter + JetBrains Mono (Google Fonts)

### Products Covered
ALLDATA (AutoZone) · AutoData (Solera) · Haynes Pro (Haynes Group) · Mitchell1 (Snap-on) · Identifix (Solera)

### Markets
UK · US · France · Germany · Spain · Italy · Poland · Argentina

### SEO Features
- Unique title + meta description per page
- Open Graph tags on all pages
- Hreflang tags (en, fr, de, es, it, pl, x-default)
- FAQPage JSON-LD schema on FAQ pages
- Organization JSON-LD on homepage
- react-helmet-async for head management
- robots: index, follow
- Canonical URLs

### Forms
- Free trial form → Formspree (placeholder URL, replace YOUR_ID)
- Contact form → Formspree (placeholder URL, replace YOUR_ID)

### Car Brand Logos
- 36 logo PNGs in `artifacts/autofixdata/public/images/logos/`
- Source: filippofilip95/car-logos-dataset GitHub repo (master branch)
- URL pattern: `/images/logos/{slug}.png` (e.g., `mercedes-benz.png`, `land-rover.png`)
- Used in: animated marquee makes bar (Layout.tsx) + homepage makes grid + Repair Manuals coverage grid
- Slugs follow the GitHub repo filename convention

### Tech
- React + TypeScript + Vite
- Tailwind CSS v4 with custom brand CSS variables
- wouter for routing
- framer-motion for animations
- lucide-react for icons
- react-helmet-async for SEO
- No backend required (pure static site)
