import { z } from 'zod';

export const recommendationServiceTurnYourAccountOn = z.object({
  recommendationId: z.number().int().nullable()
}).nullable();

export type RecommendationServiceTurnYourAccountOn = z.infer<typeof recommendationServiceTurnYourAccountOn>;
