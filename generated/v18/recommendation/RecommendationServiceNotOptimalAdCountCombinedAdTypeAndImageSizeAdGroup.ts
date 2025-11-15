import { z } from 'zod';

import { RecommendationServiceAdGroup } from './RecommendationServiceAdGroup';

export const RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSizeAdGroup = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupList: z.array(RecommendationServiceAdGroup).nullable()
}).nullable();

export type RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSizeAdGroup = z.infer<typeof RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSizeAdGroup>;
