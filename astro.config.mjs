// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // The site's address. It is served from the root of its own domain, so the
  // sub-folder ("base") is '/'.
  //
  // If the site is ever served from a sub-folder instead, such as
  // https://<organisation>.github.io/<repository>/ with no custom domain, set
  // base to '/<repository>' (the repository name).
  site: 'https://www.paleoscience.org',
  base: '/',

  output: 'static',
});
