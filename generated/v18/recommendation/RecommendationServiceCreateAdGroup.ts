import { z } from 'zod';

import { recommendationServiceCreateAdGroupList } from './RecommendationServiceCreateAdGroupList';

export const recommendationServiceCreateAdGroup = z.object({
  createAdGroupList: z.array(recommendationServiceCreateAdGroupList).nullable()
}).nullable();

export type RecommendationServiceCreateAdGroup = z.infer<typeof recommendationServiceCreateAdGroup>;
