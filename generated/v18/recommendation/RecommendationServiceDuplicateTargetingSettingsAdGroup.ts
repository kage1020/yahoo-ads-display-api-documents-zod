import { z } from 'zod';

import { recommendationServiceAdGroup } from './RecommendationServiceAdGroup';

export const recommendationServiceDuplicateTargetingSettingsAdGroup = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupList: z.array(recommendationServiceAdGroup).nullable()
}).nullable();

export type RecommendationServiceDuplicateTargetingSettingsAdGroup = z.infer<typeof recommendationServiceDuplicateTargetingSettingsAdGroup>;
