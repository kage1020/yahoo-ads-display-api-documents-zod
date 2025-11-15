import { z } from 'zod';

import { recommendationServiceAdGroupsForAddingAdsList } from './RecommendationServiceAdGroupsForAddingAdsList';

export const recommendationServiceAdGroupsForAddingAds = z.object({
  adGroupsForAddingAdsList: z.array(recommendationServiceAdGroupsForAddingAdsList).nullable()
}).nullable();

export type RecommendationServiceAdGroupsForAddingAds = z.infer<typeof recommendationServiceAdGroupsForAddingAds>;
