# holly-portfolio-site

Portfolio site for Holly — paintings, drawings, and photography. Built with [Astro](https://astro.build/) as a static site and deployed to GitHub Pages.

## Links

- [Contact Form](https://formspree.io)

## Local development

Requires Node.js 20.3+ (Node 22 recommended) and [pnpm](https://pnpm.io/).

```bash
pnpm install     # first time only
pnpm dev         # start the dev server at http://localhost:4321
pnpm build       # produce the static site in ./dist
pnpm preview     # serve the built ./dist locally
```

The dev server hot-reloads as you edit files.

## Adding work to the gallery

Each piece is a markdown file in `src/content/works/`. Create a new `.md` file with frontmatter:

```markdown
---
title: Sunset Study
category: painting # one of: painting | drawing | photo
year: 2025
medium: Oil on canvas
dimensions: 18 × 24 in
image: /images/sunset-study.jpg
alt: Description of the image for accessibility.
order: 2 # lower numbers appear first
---
```

Drop the corresponding image file into `public/images/` (the `image:` path is relative to the site root). The gallery page for that category will pick it up automatically.

## Editing text

- **Home / About / Contact:** [src/pages/index.astro](src/pages/index.astro)
- **Site title, nav, footer:** [src/layouts/Layout.astro](src/layouts/Layout.astro)
- **Styles:** [src/styles/global.css](src/styles/global.css)

## Contact form

The contact form on the home page posts to [Formspree](https://formspree.io/) — free tier (50 submissions/month) is enough for a portfolio. To activate:

1. Sign up at formspree.io and create a new form (point it at Holly's email).
2. Copy the form endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. Replace `YOUR_FORM_ID` in the `action` attribute in [src/pages/index.astro](src/pages/index.astro).

Until that's done, the form will render but submissions won't go anywhere.

## Deployment

[.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) builds the site and deploys to GitHub Pages on every push to `main`. The live URL is configured in [astro.config.mjs](astro.config.mjs) (`site` + `base`).

On the first deploy, enable Pages in repo Settings → Pages → Source: **GitHub Actions**.
