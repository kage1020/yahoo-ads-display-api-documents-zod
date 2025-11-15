import { z } from 'zod';

export const RecommendationServiceTurnYourAdOn = z.object({
  recommendationId: z.number().int().nullable()
}).nullable();

export type RecommendationServiceTurnYourAdOn = z.infer<typeof RecommendationServiceTurnYourAdOn>;
