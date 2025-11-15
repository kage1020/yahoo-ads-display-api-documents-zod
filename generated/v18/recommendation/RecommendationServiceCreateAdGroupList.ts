import { z } from 'zod';

export const RecommendationServiceCreateAdGroupList = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable()
}).nullable();

export type RecommendationServiceCreateAdGroupList = z.infer<typeof RecommendationServiceCreateAdGroupList>;
