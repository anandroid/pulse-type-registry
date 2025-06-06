import { z } from 'zod';
import { FlyerSchema } from './flyer';
import { MetadataSchema } from './metadata';

export const FlyerWithMetaSchema = FlyerSchema.merge(MetadataSchema);

export type FlyerWithMeta = z.infer<typeof FlyerWithMetaSchema>;