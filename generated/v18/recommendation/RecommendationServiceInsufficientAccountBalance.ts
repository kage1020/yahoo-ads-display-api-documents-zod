import { z } from 'zod';

export const RecommendationServiceInsufficientAccountBalance = z.object({
  recommendationId: z.number().int().nullable()
}).nullable();

export type RecommendationServiceInsufficientAccountBalance = z.infer<typeof RecommendationServiceInsufficientAccountBalance>;
