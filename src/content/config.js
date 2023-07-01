import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
		tags: z.string().optional(),
		date: z.string().or(z.date()).transform((val) => new Date(val))
			.optional(),
		draft: z.boolean().optional(),
	}),
})

export const collections = { blog }
