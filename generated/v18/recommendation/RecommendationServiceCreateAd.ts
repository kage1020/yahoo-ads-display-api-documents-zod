import { z } from 'zod';

import { recommendationServiceCreateAdList } from './RecommendationServiceCreateAdList';

export const recommendationServiceCreateAd = z.object({
  createAdList: z.array(recommendationServiceCreateAdList).nullable()
}).nullable();

export type RecommendationServiceCreateAd = z.infer<typeof recommendationServiceCreateAd>;
