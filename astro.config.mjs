import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://biu6iu.github.io',
  base: '/biu-biu/',

  vite: {
    plugins: [tailwindcss()],
  },
});