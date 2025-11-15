import { z } from 'zod';

import { RecommendationServiceUpdateAdCreativeList } from './RecommendationServiceUpdateAdCreativeList';

export const RecommendationServiceUpdateAdCreative = z.object({
  updateAdCreativeList: z.array(RecommendationServiceUpdateAdCreativeList).nullable()
}).nullable();

export type RecommendationServiceUpdateAdCreative = z.infer<typeof RecommendationServiceUpdateAdCreative>;
