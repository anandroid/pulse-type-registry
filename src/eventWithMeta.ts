import {z} from 'zod';
import { EventSchema } from './event';
import { MetadataSchema } from './metadata';

// Enhanced Event schema with metadata
export const EventWithMetaSchema = EventSchema.extend({
    metadata: MetadataSchema,
});

// Inferred TypeScript type
export type EventWithMeta = z.infer<typeof EventWithMetaSchema>;
