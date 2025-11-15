import { z } from 'zod';

import { recommendationServiceInsufficientAdScheduleTargetingCampaign } from './RecommendationServiceInsufficientAdScheduleTargetingCampaign';

export const recommendationServiceInsufficientAdScheduleTargeting = z.object({
  insufficientAdScheduleTargetingCampaignList: z.array(recommendationServiceInsufficientAdScheduleTargetingCampaign).nullable()
}).nullable();

export type RecommendationServiceInsufficientAdScheduleTargeting = z.infer<typeof recommendationServiceInsufficientAdScheduleTargeting>;
