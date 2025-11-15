import { z } from 'zod';

export const RecommendationServiceInsufficientClicksCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable()
}).nullable();

export type RecommendationServiceInsufficientClicksCampaign = z.infer<typeof RecommendationServiceInsufficientClicksCampaign>;
