import {z} from 'zod';

// Zod schema for news articles
export const NewsArticleSchema = z.object({
    id: z.string(), // Assuming ID is a UUID
    image_url: z.string(),
    title: z.string(),
    description: z.string(),
    source: z.string(),
    source_url: z.string(),
    date: z.string(),
    emoji: z.string().nullable()
});

// Inferred TypeScript type
export type NewsArticle = z.infer<typeof NewsArticleSchema>;