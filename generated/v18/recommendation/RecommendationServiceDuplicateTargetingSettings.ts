import { z } from 'zod';

import { RecommendationServiceDuplicateTargetingSettingsAdGroup } from './RecommendationServiceDuplicateTargetingSettingsAdGroup';

export const RecommendationServiceDuplicateTargetingSettings = z.object({
  duplicateTargetingSettingsAdGroupList: z.array(RecommendationServiceDuplicateTargetingSettingsAdGroup).nullable()
}).nullable();

export type RecommendationServiceDuplicateTargetingSettings = z.infer<typeof RecommendationServiceDuplicateTargetingSettings>;
