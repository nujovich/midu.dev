import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./src/services/readTime.js";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "rose-pine",
      wrap: true,
    },
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [tailwind(), mdx()],
});
