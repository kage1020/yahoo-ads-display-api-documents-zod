import { z } from 'zod';

export const RecommendationServiceInsufficientVideoViewsCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable()
}).nullable();

export type RecommendationServiceInsufficientVideoViewsCampaign = z.infer<typeof RecommendationServiceInsufficientVideoViewsCampaign>;
