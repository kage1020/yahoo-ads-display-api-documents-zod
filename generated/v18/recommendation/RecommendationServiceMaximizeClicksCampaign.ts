import { z } from 'zod';

export const RecommendationServiceMaximizeClicksCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  currentBudget: z.number().int().nullable(),
  currentCampaignBiddingStrategyType: z.string().nullable(),
  currentCpcBidValue: z.number().int().nullable(),
  recommendedCampaignBiddingStrategyType: z.string().nullable()
}).nullable();

export type RecommendationServiceMaximizeClicksCampaign = z.infer<typeof RecommendationServiceMaximizeClicksCampaign>;
