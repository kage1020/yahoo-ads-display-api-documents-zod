import { z } from 'zod';

export const recommendationServiceInsufficientTargetingCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable()
}).nullable();

export type RecommendationServiceInsufficientTargetingCampaign = z.infer<typeof recommendationServiceInsufficientTargetingCampaign>;
