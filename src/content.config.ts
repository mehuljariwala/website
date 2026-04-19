import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const post = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/post" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
    readers: z.number().optional(),
  }),
});

export const collections = { post };
