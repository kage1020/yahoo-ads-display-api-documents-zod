import { z } from 'zod';

export const recommendationServiceAudienceListNotAccumulated = z.object({
  recommendationId: z.number().int().nullable()
}).nullable();

export type RecommendationServiceAudienceListNotAccumulated = z.infer<typeof recommendationServiceAudienceListNotAccumulated>;
