import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'server', // ⬅️ 这是关键！
  integrations: [mdx()]
});
