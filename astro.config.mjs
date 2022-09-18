import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import remarkAstrojsImage from "@altano/remark-astrojs-image";
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
    image(),
    mdx({
      remarkPlugins: [remarkAstrojsImage],
    }),
    sitemap(),
  ],
  server: { port: 3003 },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
