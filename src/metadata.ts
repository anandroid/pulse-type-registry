import {z} from 'zod';

// Metadata schema for additional fields across all types
export const MetadataSchema = z.object({
    seen: z.boolean().default(false),
    rank: z.number().nullable().default(null),

});

// Inferred TypeScript type
export type Metadata = z.infer<typeof MetadataSchema>;
