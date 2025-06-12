import {z} from 'zod';

export const EventSchema = z.object({
    id: z.string(), // Assuming ID is a UUID
    title: z.string(),
    date: z.string().nullable(), // Assumes ISO 8601 string
    location: z.string().nullable(),
    description: z.string().nullable(),
    image_url: z.string().nullable(),
    source: z.string().nullable(),
    source_url: z.string().nullable(),
    emoji: z.string().nullable()
});

export type Event = z.infer<typeof EventSchema>;