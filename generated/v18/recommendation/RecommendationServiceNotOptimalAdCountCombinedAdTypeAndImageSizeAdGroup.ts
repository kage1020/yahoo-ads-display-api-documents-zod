import { z } from 'zod';

import { recommendationServiceAdGroup } from './RecommendationServiceAdGroup';

export const recommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSizeAdGroup = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupList: z.array(recommendationServiceAdGroup).nullable()
}).nullable();

export type RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSizeAdGroup = z.infer<typeof recommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSizeAdGroup>;
