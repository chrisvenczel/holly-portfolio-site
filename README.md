# holly-portfolio-site

Basic portfolio website for Holly.

## Local preview

Open `index.html` directly in your browser, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

A GitHub Actions workflow at `.github/workflows/deploy-pages.yml` deploys the site to GitHub Pages automatically on pushes to `main` (and can also be run manually with `workflow_dispatch`).
