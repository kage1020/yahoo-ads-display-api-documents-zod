import { z } from 'zod';

import { RecommendationServiceAdGroup } from './RecommendationServiceAdGroup';

export const RecommendationServiceDuplicateTargetingSettingsAdGroup = z.object({
  recommendationId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupList: z.array(RecommendationServiceAdGroup).nullable()
}).nullable();

export type RecommendationServiceDuplicateTargetingSettingsAdGroup = z.infer<typeof RecommendationServiceDuplicateTargetingSettingsAdGroup>;
