import { z } from 'zod';
import { TweetSchema } from './tweet';
import { MetadataSchema } from './metadata';

export const TweetWithMetaSchema = z.object({
    tweet: TweetSchema,
    metadata: MetadataSchema
});

export type TweetWithMeta = z.infer<typeof TweetWithMetaSchema>;