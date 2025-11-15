import { z } from 'zod';

export const recommendationServiceMissingPaymentSettings = z.object({
  recommendationId: z.number().int().nullable()
}).nullable();

export type RecommendationServiceMissingPaymentSettings = z.infer<typeof recommendationServiceMissingPaymentSettings>;
