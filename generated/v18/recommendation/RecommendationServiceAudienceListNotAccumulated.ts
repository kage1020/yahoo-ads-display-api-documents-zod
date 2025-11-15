import { z } from 'zod';

export const RecommendationServiceAudienceListNotAccumulated = z.object({
  recommendationId: z.number().int().nullable()
}).nullable();

export type RecommendationServiceAudienceListNotAccumulated = z.infer<typeof RecommendationServiceAudienceListNotAccumulated>;
