import {z} from 'zod';

export const PlaceSchema = z.object({
    id: z.string(),
    name: z.string(),
    address: z.string().nullable(),
    city: z.string().nullable(),
    state: z.string().nullable(),
    country: z.string().nullable(),
    postal_code: z.string().nullable(),
    phone: z.string().nullable(),
    website: z.string().nullable(),
    description: z.string().nullable(),
    category: z.string().nullable(),
    image_url: z.string().nullable(),
    source: z.string().nullable(),
    source_url: z.string().nullable(),
    emoji: z.string().nullable(),
    
    // Additional metadata
    area: z.string().nullable(),
    region: z.string().nullable(),
    timestamp: z.string(),
    
    // Related content
    reels: z.array(z.string()).optional() // Array of reel IDs
});

export type Place = z.infer<typeof PlaceSchema>;