import { z } from 'zod';

export const RecommendationServiceImpsShareBudgetLossOverCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  currentBudget: z.number().int().nullable(),
  recommendedBudget: z.number().int().nullable()
}).nullable();

export type RecommendationServiceImpsShareBudgetLossOverCampaign = z.infer<typeof RecommendationServiceImpsShareBudgetLossOverCampaign>;
