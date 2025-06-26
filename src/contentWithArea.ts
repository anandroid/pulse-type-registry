import { z } from 'zod';

/**
 * Enhanced content schema with area hierarchy support
 * Used for content that can be relevant to multiple areas
 */
export const ContentWithAreaSchema = z.object({
  // Original content fields (can be any content type)
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  source: z.string(),
  source_url: z.string(),
  image_url: z.string().optional(),
  thumbnail_url: z.string().optional(),
  
  // Standard metadata
  area: z.string().describe('Primary area ID'),
  region: z.string(),
  country: z.string(),
  category: z.string(),
  timestamp: z.string(),
  
  // Area hierarchy fields
  primary_area: z.string().describe('Primary area where content originated'),
  applicable_areas: z.array(z.string()).describe('All areas where content is relevant'),
  area_relevance: z.record(z.string(), z.number()).describe('Relevance score (0-1) for each area'),
  
  // Optional fields
  page: z.string().optional().describe('Source page/config ID'),
  expire_at: z.string().optional().describe('Content expiration timestamp'),
  
  // Metadata
  metadata: z.object({
    source_type: z.enum(['local', 'parent', 'sibling']).optional(),
    area_mentions: z.array(z.string()).optional().describe('Areas mentioned in content'),
    location_detected: z.boolean().optional(),
    enhanced_for_areas: z.boolean().optional()
  }).optional()
});

export type ContentWithArea = z.infer<typeof ContentWithAreaSchema>;

/**
 * Area relevance metadata for content processing
 */
export const AreaRelevanceMetadataSchema = z.object({
  primary_area: z.string(),
  applicable_areas: z.array(z.string()),
  area_relevance: z.record(z.string(), z.number()),
  area_mentions: z.array(z.string()).optional(),
  location_keywords: z.array(z.string()).optional(),
  relevance_factors: z.object({
    direct_mention: z.boolean(),
    parent_child_relation: z.boolean(),
    geographic_proximity: z.boolean(),
    category_boost: z.boolean()
  }).optional()
});

export type AreaRelevanceMetadata = z.infer<typeof AreaRelevanceMetadataSchema>;