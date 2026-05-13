import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['painting', 'drawing', 'photo']),
    year: z.number().optional(),
    medium: z.string().optional(),
    dimensions: z.string().optional(),
    image: z.string(),
    alt: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { works };
