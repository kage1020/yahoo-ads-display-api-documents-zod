import { z } from 'zod';

import { RecommendationServiceCreateAdList } from './RecommendationServiceCreateAdList';

export const RecommendationServiceCreateAd = z.object({
  createAdList: z.array(RecommendationServiceCreateAdList).nullable()
}).nullable();

export type RecommendationServiceCreateAd = z.infer<typeof RecommendationServiceCreateAd>;
