import { z } from 'zod';

export const RecommendationServiceCreateCampaign = z.object({
  recommendationId: z.number().int().nullable()
}).nullable();

export type RecommendationServiceCreateCampaign = z.infer<typeof RecommendationServiceCreateCampaign>;
