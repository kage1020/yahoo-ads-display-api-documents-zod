import { z } from 'zod';

export const RecommendationServiceMaximizeConversionsCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  currentBudget: z.number().int().nullable(),
  currentCampaignBiddingStrategyType: z.string().nullable(),
  currentCpcBidValue: z.number().int().nullable(),
  recommendedCampaignBiddingStrategyType: z.string().nullable()
}).nullable();

export type RecommendationServiceMaximizeConversionsCampaign = z.infer<typeof RecommendationServiceMaximizeConversionsCampaign>;
