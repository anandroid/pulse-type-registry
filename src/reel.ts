import {z} from 'zod';

export const ReelSchema = z.object({
    id: z.string().nullable(), // Assuming ID is a UUID
    title: z.string(),
    thumbnail_url: z.string().nullable(),
    duration: z.string().nullable(), // Consider z.number().int().positive().nullable() for duration in seconds/ms
    source: z.string().nullable(),
    source_url: z.string().nullable()
});

export type Reel = z.infer<typeof ReelSchema>;