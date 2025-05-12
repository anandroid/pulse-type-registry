import {z} from 'zod';

// Zod schema for news articles
export const NewsArticleSchema = z.object({
    image_url: z.string(),
    title: z.string(),
    short_description: z.string(),
    source: z.string(),
    source_url: z.string(),
    timestamp: z.string()
});

// Inferred TypeScript type
export type NewsArticle = z.infer<typeof NewsArticleSchema>;