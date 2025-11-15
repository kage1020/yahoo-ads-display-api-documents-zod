import { z } from 'zod';

export const recommendationServiceInsufficientAccountBalance = z.object({
  recommendationId: z.number().int().nullable()
}).nullable();

export type RecommendationServiceInsufficientAccountBalance = z.infer<typeof recommendationServiceInsufficientAccountBalance>;
