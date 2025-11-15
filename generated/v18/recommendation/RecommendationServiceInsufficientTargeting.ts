import { z } from 'zod';

import { recommendationServiceInsufficientTargetingCampaign } from './RecommendationServiceInsufficientTargetingCampaign';

export const recommendationServiceInsufficientTargeting = z.object({
  insufficientTargetingCampaignList: z.array(recommendationServiceInsufficientTargetingCampaign).nullable()
}).nullable();

export type RecommendationServiceInsufficientTargeting = z.infer<typeof recommendationServiceInsufficientTargeting>;
