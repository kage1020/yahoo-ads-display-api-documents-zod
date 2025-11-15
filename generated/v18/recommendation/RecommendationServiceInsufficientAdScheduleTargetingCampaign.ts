import { z } from 'zod';

export const RecommendationServiceInsufficientAdScheduleTargetingCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable()
}).nullable();

export type RecommendationServiceInsufficientAdScheduleTargetingCampaign = z.infer<typeof RecommendationServiceInsufficientAdScheduleTargetingCampaign>;
