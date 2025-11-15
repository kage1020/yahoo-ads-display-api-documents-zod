import { z } from 'zod';

import { RecommendationServiceCreateAdGroupList } from './RecommendationServiceCreateAdGroupList';

export const RecommendationServiceCreateAdGroup = z.object({
  createAdGroupList: z.array(RecommendationServiceCreateAdGroupList).nullable()
}).nullable();

export type RecommendationServiceCreateAdGroup = z.infer<typeof RecommendationServiceCreateAdGroup>;
