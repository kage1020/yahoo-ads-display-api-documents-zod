import { z } from 'zod';

import { RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSizeAdGroup } from './RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSizeAdGroup';

export const RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSize = z.object({
  notOptimalAdCountCombinedAdTypeAndImageSizeAdGroupList: z.array(RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSizeAdGroup).nullable()
}).nullable();

export type RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSize = z.infer<typeof RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSize>;
