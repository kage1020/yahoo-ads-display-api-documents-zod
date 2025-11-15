import { z } from 'zod';

export const recommendationServiceInsufficientAdScheduleTargetingCampaign = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable()
}).nullable();

export type RecommendationServiceInsufficientAdScheduleTargetingCampaign = z.infer<typeof recommendationServiceInsufficientAdScheduleTargetingCampaign>;
