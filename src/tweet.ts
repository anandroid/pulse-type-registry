import { z } from 'zod';

export const TweetSchema = z.object({
    id: z.string(),
    title: z.string(), // Tweet content/text
    image_url: z.string().nullable(), // Tweet image if any
    profile_picture_url: z.string(), // Author's profile picture
    username: z.string(), // Twitter username
    source: z.string(), // Twitter display name
    source_url: z.string(), // URL to the tweet
    date: z.string() // Tweet timestamp
});

export type Tweet = z.infer<typeof TweetSchema>;