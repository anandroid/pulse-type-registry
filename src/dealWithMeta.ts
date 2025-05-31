import {z} from 'zod';
import { DealSchema } from './deal';
import { MetadataSchema } from './metadata';

// Enhanced Deal schema with metadata
export const DealWithMetaSchema = DealSchema.extend({
    metadata: MetadataSchema,
});

// Inferred TypeScript type
export type DealWithMeta = z.infer<typeof DealWithMetaSchema>;
