import { z } from 'zod';

import { recommendationServiceUpdateAdCreativeList } from './RecommendationServiceUpdateAdCreativeList';

export const recommendationServiceUpdateAdCreative = z.object({
  updateAdCreativeList: z.array(recommendationServiceUpdateAdCreativeList).nullable()
}).nullable();

export type RecommendationServiceUpdateAdCreative = z.infer<typeof recommendationServiceUpdateAdCreative>;
