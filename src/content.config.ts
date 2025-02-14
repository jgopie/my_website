import { defineCollection, z } from "astro:content";
import {glob} from 'astro/loaders';

const blog = defineCollection({
    loader: glob({pattern: "**/[^_]*.md", base: "./src/content/"}),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        isDraft: z.boolean(),
        publishedDate: z.string().transform((str) => new Date(str)),
        tags: z.array(z.string()),
        image: z.object({
            url: z.string().optional(),
            alt: z.string().optional()
        }),
    },)
});

export const collections = {blog};