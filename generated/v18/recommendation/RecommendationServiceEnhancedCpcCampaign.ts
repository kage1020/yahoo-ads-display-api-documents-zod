import { z } from 'zod';

export const recommendationServiceEnhancedCpcCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  currentCampaignBiddingStrategyType: z.string().nullable(),
  currentCpcBidValue: z.number().int().nullable(),
  recommendedCampaignBiddingStrategyType: z.string().nullable()
}).nullable();

export type RecommendationServiceEnhancedCpcCampaign = z.infer<typeof recommendationServiceEnhancedCpcCampaign>;
