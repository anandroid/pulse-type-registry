import { z } from 'zod';
import { EventSchema } from './event';
import { DealSchema } from './deal';
import { NewsArticleSchema } from './newsArticle';
import { ReelSchema } from './reel';

/**
 * Schema for items that can be included in a flyer
 * This is a union type that can be any of the existing content types
 */
export const FlyerItemSchema = z.union([
  EventSchema.extend({ itemType: z.literal('event') }),
  DealSchema.extend({ itemType: z.literal('deal') }),
  NewsArticleSchema.extend({ itemType: z.literal('newsArticle') }),
  ReelSchema.extend({ itemType: z.literal('reel') })
]);

/**
 * Schema for a flyer that groups items with the same image
 */
export const FlyerSchema = z.object({
  id: z.string(),
  image_url: z.string(),
  thumbnail_url: z.string().nullish(),
  items: z.array(FlyerItemSchema).min(1)
});

export type Flyer = z.infer<typeof FlyerSchema>;
export type FlyerItem = z.infer<typeof FlyerItemSchema>;