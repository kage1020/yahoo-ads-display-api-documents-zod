import { z } from 'zod';

import { recommendationServiceNotTargetingProperAudienceListAdGroupList } from './RecommendationServiceNotTargetingProperAudienceListAdGroupList';

export const recommendationServiceNotTargetingProperAudienceListAdGroup = z.object({
  adGroupList: z.array(recommendationServiceNotTargetingProperAudienceListAdGroupList).nullable()
}).nullable();

export type RecommendationServiceNotTargetingProperAudienceListAdGroup = z.infer<typeof recommendationServiceNotTargetingProperAudienceListAdGroup>;
