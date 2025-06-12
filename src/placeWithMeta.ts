import { z } from 'zod';
import { PlaceSchema } from './place';
import { MetadataSchema } from './metadata';

export const PlaceWithMetaSchema = PlaceSchema.merge(MetadataSchema);

export type PlaceWithMeta = z.infer<typeof PlaceWithMetaSchema>;