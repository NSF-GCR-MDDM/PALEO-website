# PALEO collaboration website (under construction)

Draft public website of PALEO, the Passive Asynchronous Lattice Exposure Observatory.

Static site built with [Astro](https://astro.build) and deployed to GitHub Pages
by the workflow in `.github/workflows/deploy.yml`.

- **Editing content (members, news, publications, photos, ...):** see [EDITING.md](EDITING.md).

## Where the site is published

The site lives at **https://www.paleoscience.org**. Pushing to `main` builds it
and publishes it to GitHub Pages, which serves it under that domain.

How the pieces fit together, in case any of them needs changing:

- **Repository settings > Pages:** Source is **GitHub Actions**, and Custom domain
  is `www.paleoscience.org`. The domain lives only in this setting; a `CNAME`
  file in the repository would be ignored, because we deploy through Actions.
- **DNS for paleoscience.org** (managed wherever the domain is registered):
  four `A` records and four `AAAA` records for `paleoscience.org` pointing at
  GitHub Pages, and a `CNAME` record pointing `www` at `nsf-gcr-mddm.github.io`.
  Domain "forwarding" at the registrar must stay off; it fights the custom
  domain setting and produces a redirect loop.
- **`astro.config.mjs`:** `site` is the domain, and `base` is `'/'` because the
  site is served from the root of its own domain. If the custom domain is ever
  removed, the site falls back to `https://nsf-gcr-mddm.github.io/PALEO-website/`,
  and `base` must then become `'/PALEO-website'`.

- **Running locally:** install Node.js 22 or later, then

  ```
  npm install
  npm run dev      # local preview at http://localhost:4321
  npm run build    # writes the finished site to dist/
  ```
