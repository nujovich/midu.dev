import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'rose-pine',
      wrap: true,
    },
  },
	integrations: [tailwind(), mdx()],
})
