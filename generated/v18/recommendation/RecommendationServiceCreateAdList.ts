import { z } from 'zod';

export const recommendationServiceCreateAdList = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable()
}).nullable();

export type RecommendationServiceCreateAdList = z.infer<typeof recommendationServiceCreateAdList>;
