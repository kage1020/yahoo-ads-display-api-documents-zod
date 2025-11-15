import { z } from 'zod';

import { recommendationServiceAdGroup } from './RecommendationServiceAdGroup';

export const recommendationServiceAdGroupsForAddingAdsList = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupList: z.array(recommendationServiceAdGroup).nullable()
}).nullable();

export type RecommendationServiceAdGroupsForAddingAdsList = z.infer<typeof recommendationServiceAdGroupsForAddingAdsList>;
