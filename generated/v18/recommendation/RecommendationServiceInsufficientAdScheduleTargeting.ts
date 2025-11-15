import { z } from 'zod';

import { RecommendationServiceInsufficientAdScheduleTargetingCampaign } from './RecommendationServiceInsufficientAdScheduleTargetingCampaign';

export const RecommendationServiceInsufficientAdScheduleTargeting = z.object({
  insufficientAdScheduleTargetingCampaignList: z.array(RecommendationServiceInsufficientAdScheduleTargetingCampaign).nullable()
}).nullable();

export type RecommendationServiceInsufficientAdScheduleTargeting = z.infer<typeof RecommendationServiceInsufficientAdScheduleTargeting>;
