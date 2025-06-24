import {z} from 'zod';

// Metadata schema for additional fields across all types
export const MetadataSchema = z.object({
    seen: z.boolean().default(false),
    rank: z.number().nullable().default(null),
    // Google Places specific fields
    google_place_id: z.string().nullable().optional(),
    rating: z.number().nullable().optional(),
    user_ratings_total: z.number().nullable().optional(),
    price_level: z.number().nullable().optional(),
    types: z.array(z.string()).nullable().optional(),
    location: z.object({
        lat: z.number(),
        lng: z.number()
    }).nullable().optional(),
});

// Inferred TypeScript type
export type Metadata = z.infer<typeof MetadataSchema>;
