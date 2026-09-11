// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vasad.in',
  integrations: [sitemap()],
  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()],
  },
});