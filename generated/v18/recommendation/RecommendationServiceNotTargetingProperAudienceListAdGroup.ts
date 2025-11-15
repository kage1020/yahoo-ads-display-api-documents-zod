import { z } from 'zod';

import { RecommendationServiceNotTargetingProperAudienceListAdGroupList } from './RecommendationServiceNotTargetingProperAudienceListAdGroupList';

export const RecommendationServiceNotTargetingProperAudienceListAdGroup = z.object({
  adGroupList: z.array(RecommendationServiceNotTargetingProperAudienceListAdGroupList).nullable()
}).nullable();

export type RecommendationServiceNotTargetingProperAudienceListAdGroup = z.infer<typeof RecommendationServiceNotTargetingProperAudienceListAdGroup>;
