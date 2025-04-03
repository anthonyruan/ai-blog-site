import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  adapter: vercel(),
  output: 'server',
  integrations: [mdx()]
});