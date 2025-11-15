import { z } from 'zod';

import { recommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSizeAdGroup } from './RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSizeAdGroup';

export const recommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSize = z.object({
  notOptimalAdCountCombinedAdTypeAndImageSizeAdGroupList: z.array(recommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSizeAdGroup).nullable()
}).nullable();

export type RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSize = z.infer<typeof recommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSize>;
