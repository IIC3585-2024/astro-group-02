import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  experimental: {
    actions: true
  },
  trailingSlash: "never",
  output: "server",
  adapter: vercel()
});