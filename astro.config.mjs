import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind'; // ✅ Add this
import path from 'path';

export default defineConfig({
  integrations: [react(), tailwind()],
  markdown: {
    syntaxHighlight: 'prism',
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});


