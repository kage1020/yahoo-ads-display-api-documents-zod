import { z } from 'zod';

export const RecommendationServiceDailyBudgetSmallCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  currentAmount: z.number().int().nullable()
}).nullable();

export type RecommendationServiceDailyBudgetSmallCampaign = z.infer<typeof RecommendationServiceDailyBudgetSmallCampaign>;
