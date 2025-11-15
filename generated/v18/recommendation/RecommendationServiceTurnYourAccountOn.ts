import { z } from 'zod';

export const RecommendationServiceTurnYourAccountOn = z.object({
  recommendationId: z.number().int().nullable()
}).nullable();

export type RecommendationServiceTurnYourAccountOn = z.infer<typeof RecommendationServiceTurnYourAccountOn>;
