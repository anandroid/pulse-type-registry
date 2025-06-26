import { z } from 'zod';

/**
 * Area Schema for Metropolitan Area Hierarchy System
 * Supports metro areas and their suburbs with content inheritance
 */
export const AreaSchema = z.object({
  id: z.string().describe('Unique area identifier (e.g., "cambridge", "boston")'),
  name: z.string().describe('Human-readable area name'),
  type: z.enum(['metro', 'suburb']).describe('Area type - metro (parent) or suburb (child)'),
  parent_area: z.string().nullable().describe('Parent area ID for suburbs'),
  children: z.array(z.string()).optional().describe('Child area IDs for metro areas'),
  region: z.string().describe('State/province code (e.g., "MA", "FL")'),
  country: z.string().describe('Country code (e.g., "US")'),
  emoji: z.string().describe('Area emoji representation'),
  timezone: z.string().describe('Area timezone (e.g., "America/New_York")'),
  location: z.object({
    lat: z.number(),
    lng: z.number()
  }).describe('Geographic coordinates'),
  population: z.number().optional().describe('Area population'),
  enabled: z.boolean().default(true).describe('Whether area is active'),
  
  // Content inheritance settings for suburbs
  inherit_from_parent: z.boolean().default(false).describe('Whether suburb inherits parent content'),
  content_weight: z.object({
    parent: z.number().min(0).max(1).describe('Weight for parent content (0-1)'),
    local: z.number().min(0).max(1).describe('Weight for local content (0-1)')
  }).optional().describe('Content mixing weights for suburbs'),
  
  // Optional metadata
  nicknames: z.array(z.string()).optional().describe('Alternative names/nicknames'),
  landmarks: z.array(z.string()).optional().describe('Notable landmarks for area detection'),
  keywords: z.array(z.string()).optional().describe('Keywords for area identification')
});

export type Area = z.infer<typeof AreaSchema>;

/**
 * Area Hierarchy helper type for managing relationships
 */
export interface AreaHierarchy {
  area: Area;
  parent?: Area;
  children?: Area[];
  siblings?: Area[];
}