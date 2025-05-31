import {z} from 'zod';
import { NewsArticleSchema } from './newsArticle';
import { MetadataSchema } from './metadata';

// Enhanced NewsArticle schema with metadata
export const NewsArticleWithMetaSchema = NewsArticleSchema.extend({
    metadata: MetadataSchema,
});

// Inferred TypeScript type
export type NewsArticleWithMeta = z.infer<typeof NewsArticleWithMetaSchema>;
