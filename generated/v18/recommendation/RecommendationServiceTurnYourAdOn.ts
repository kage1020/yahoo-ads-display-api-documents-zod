import { z } from 'zod';

export const recommendationServiceTurnYourAdOn = z.object({
  recommendationId: z.number().int().nullable()
}).nullable();

export type RecommendationServiceTurnYourAdOn = z.infer<typeof recommendationServiceTurnYourAdOn>;
