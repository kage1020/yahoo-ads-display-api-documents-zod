import { z } from 'zod';

export const RecommendationServiceUpdateAdCreativeList = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  adId: z.number().int().nullable(),
  adName: z.string().nullable(),
  previousViewableCtr: z.number().nullable(),
  latestViewableCtr: z.number().nullable(),
  viewableCtrDecrease: z.number().nullable()
}).nullable();

export type RecommendationServiceUpdateAdCreativeList = z.infer<typeof RecommendationServiceUpdateAdCreativeList>;
