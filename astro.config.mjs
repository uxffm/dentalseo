import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import path from 'path';

export default defineConfig({
    base: '/dentalseo/',
  integrations: [
    react(),
    tailwind(),     // wires up Tailwind automatically
  ],
  vite: {
    resolve: {
      alias: { '@': path.resolve('./src') },
    },
  },
});
