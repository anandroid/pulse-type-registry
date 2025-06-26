import { z } from 'zod';
import { PlaceSchema } from './place';
import { MetadataSchema } from './metadata';

// Place-specific metadata including Google Places fields
const PlaceMetadataSchema = MetadataSchema.extend({
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

export const PlaceWithMetaSchema = PlaceSchema.merge(PlaceMetadataSchema);

export type PlaceWithMeta = z.infer<typeof PlaceWithMetaSchema>;