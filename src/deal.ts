import {z} from 'zod';

export const DealSchema = z.object({
    id: z.string().nullable(), // Assuming ID is a UUID
    product: z.string(),
    title: z.string().nullable(),
    discount: z.string().nullable(),
    price: z.string().nullable(), // Consider z.number().positive().nullable() if it's a numeric price
    description: z.string().nullable(),
    source: z.string().nullable(),
    source_url: z.string().nullable(),
    image_url: z.string().nullable(),
    timestamp: z.string().nullable() // Assumes ISO 8601 string
});

export type Deal = z.infer<typeof DealSchema>;