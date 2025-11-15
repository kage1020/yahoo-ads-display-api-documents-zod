import { z } from 'zod';

import { RecommendationServiceInsufficientTargetingCampaign } from './RecommendationServiceInsufficientTargetingCampaign';

export const RecommendationServiceInsufficientTargeting = z.object({
  insufficientTargetingCampaignList: z.array(RecommendationServiceInsufficientTargetingCampaign).nullable()
}).nullable();

export type RecommendationServiceInsufficientTargeting = z.infer<typeof RecommendationServiceInsufficientTargeting>;
