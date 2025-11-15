import { z } from 'zod';

export const recommendationServiceInsufficientConversionsCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable()
}).nullable();

export type RecommendationServiceInsufficientConversionsCampaign = z.infer<typeof recommendationServiceInsufficientConversionsCampaign>;
