import { z } from 'zod';

import { RecommendationServiceAdGroupsForAddingAdsList } from './RecommendationServiceAdGroupsForAddingAdsList';

export const RecommendationServiceAdGroupsForAddingAds = z.object({
  adGroupsForAddingAdsList: z.array(RecommendationServiceAdGroupsForAddingAdsList).nullable()
}).nullable();

export type RecommendationServiceAdGroupsForAddingAds = z.infer<typeof RecommendationServiceAdGroupsForAddingAds>;
