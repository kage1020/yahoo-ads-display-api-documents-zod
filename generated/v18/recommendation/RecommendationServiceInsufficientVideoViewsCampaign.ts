import { z } from 'zod';

export const recommendationServiceInsufficientVideoViewsCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable()
}).nullable();

export type RecommendationServiceInsufficientVideoViewsCampaign = z.infer<typeof recommendationServiceInsufficientVideoViewsCampaign>;
