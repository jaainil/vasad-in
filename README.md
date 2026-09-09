# Vasad.in — વાસદ (Vasudhanagari)

The unofficial community portal for **Vasad**, a town on the northern bank of the Mahi River in Anand district, Gujarat — the Mahi-river gateway to the Charotar region. It showcases the town (heritage, industry, education, landmarks) for visitors while serving as a reference point for residents and the diaspora.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/large.svg)](https://astro.build)

## Pages

| Route | Purpose |
| :---- | :------ |
| `/` (index) | Home — town overview, dal-mill industry, soil strata, landmarks |
| `/about` | The town's story, people, and civic record |
| `/visit` | Tourism — riverside, ashram, resort, day trips |
| `/study` | Education — SVIT and campus life |
| `/directory` | Local directory — dal marts, mills, PGs, mess/tiffin |
| `/contact` | Contact info, panchayat service schedules, emergency lines |

## Tech Stack

- [Astro 7](https://astro.build) — static output, no UI framework; plain `.astro` components with scoped styles and vanilla JS
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`
- [Leaflet](https://leafletjs.com) — interactive town map, with points of interest fetched live from [OpenStreetMap](https://www.openstreetmap.org) via the Overpass API (`src/lib/map/`)
- English copy with Gujarati accents (no i18n routes)

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── LorryFlank.astro
│   │   ├── Map.astro
│   │   └── Nav.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── map/
│   │       ├── categories.ts   # POI category definitions
│   │       └── overpass.ts     # Overpass API query builder
│   ├── pages/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── directory.astro
│   │   ├── index.astro
│   │   ├── study.astro
│   │   └── visit.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## Commands

All commands are run from the root of the project:

| Command             | Action                                        |
| :------------------ | :-------------------------------------------- |
| `npm install`       | Installs dependencies (Node ≥ 22.12.0)        |
| `npm run dev`       | Starts local dev server at `localhost:4321`   |
| `npm run build`     | Builds the production site to `./dist/`       |
| `npm run preview`   | Previews the production build locally         |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

### Background dev server

During development, run the dev server in background mode:

```sh
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## About This Project

This is an **independent, unofficial community project** — not the municipal government website. Factual content traces to the town's public record; nothing is fabricated.

- **Developer:** [Jainil Prajapati](https://jaainil.com)
- **Repository:** [github.com/jaainil/vasad.in](https://github.com/jaainil/vasad.in)
- **Feedback:** jainilprajapati9@gmail.com

Found an inaccuracy, or know a story the site should carry? Reach out — contributions welcome.
