import { z } from 'zod';

export const RecommendationServiceMissingPaymentSettings = z.object({
  recommendationId: z.number().int().nullable()
}).nullable();

export type RecommendationServiceMissingPaymentSettings = z.infer<typeof RecommendationServiceMissingPaymentSettings>;
