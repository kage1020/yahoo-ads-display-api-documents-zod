import { z } from 'zod';

import { recommendationServiceDuplicateTargetingSettingsAdGroup } from './RecommendationServiceDuplicateTargetingSettingsAdGroup';

export const recommendationServiceDuplicateTargetingSettings = z.object({
  duplicateTargetingSettingsAdGroupList: z.array(recommendationServiceDuplicateTargetingSettingsAdGroup).nullable()
}).nullable();

export type RecommendationServiceDuplicateTargetingSettings = z.infer<typeof recommendationServiceDuplicateTargetingSettings>;
