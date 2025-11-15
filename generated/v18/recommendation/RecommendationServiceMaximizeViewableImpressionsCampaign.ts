import { z } from 'zod';

export const recommendationServiceMaximizeViewableImpressionsCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  currentBudget: z.number().int().nullable(),
  currentCampaignBiddingStrategyType: z.string().nullable(),
  currentVcpmBidValue: z.number().int().nullable(),
  recommendedCampaignBiddingStrategyType: z.string().nullable()
}).nullable();

export type RecommendationServiceMaximizeViewableImpressionsCampaign = z.infer<typeof recommendationServiceMaximizeViewableImpressionsCampaign>;
