import {z} from 'zod';
import { ReelSchema } from './reel';
import { MetadataSchema } from './metadata';

// Enhanced Reel schema with metadata
// Note: The original ReelSchema doesn't have a rank field, so we just extend it with metadata
export const ReelWithMetaSchema = ReelSchema.extend({
    metadata: MetadataSchema,
});

// Inferred TypeScript type
export type ReelWithMeta = z.infer<typeof ReelWithMetaSchema>;
