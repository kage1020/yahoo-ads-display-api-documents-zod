import { z } from 'zod';

export const recommendationServiceDailyBudgetOverCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  currentBudget: z.number().int().nullable()
}).nullable();

export type RecommendationServiceDailyBudgetOverCampaign = z.infer<typeof recommendationServiceDailyBudgetOverCampaign>;
