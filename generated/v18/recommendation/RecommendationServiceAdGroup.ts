import { z } from 'zod';

export const recommendationServiceAdGroup = z.object({
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  mediaAdFormat: z.string().nullable(),
  adCount: z.number().int().nullable()
}).nullable();

export type RecommendationServiceAdGroup = z.infer<typeof recommendationServiceAdGroup>;
