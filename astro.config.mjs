import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://biu6iu.github.io',
  base: '/biu-biu/',

  // Temporary during the migration: the Vite build still owns ./dist, so Astro
  // writes elsewhere and the two can be compared side by side. Switch to the
  // default ./dist in the final phase, once Vite is removed.
  outDir: './dist-astro',
});
