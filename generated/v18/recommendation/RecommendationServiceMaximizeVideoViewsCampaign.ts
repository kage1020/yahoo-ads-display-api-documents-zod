import { z } from 'zod';

export const RecommendationServiceMaximizeVideoViewsCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  currentBudget: z.number().int().nullable(),
  currentCampaignBiddingStrategyType: z.string().nullable(),
  currentCpvBidValue: z.number().int().nullable(),
  recommendedCampaignBiddingStrategyType: z.string().nullable()
}).nullable();

export type RecommendationServiceMaximizeVideoViewsCampaign = z.infer<typeof RecommendationServiceMaximizeVideoViewsCampaign>;
