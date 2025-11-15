import { z } from 'zod';

export const recommendationServiceCreateCampaign = z.object({
  recommendationId: z.number().int().nullable()
}).nullable();

export type RecommendationServiceCreateCampaign = z.infer<typeof recommendationServiceCreateCampaign>;
