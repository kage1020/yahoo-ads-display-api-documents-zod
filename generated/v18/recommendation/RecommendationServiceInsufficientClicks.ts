import { z } from 'zod';

import { RecommendationServiceInsufficientClicksCampaign } from './RecommendationServiceInsufficientClicksCampaign';

export const RecommendationServiceInsufficientClicks = z.object({
  insufficientClicksCampaignList: z.array(RecommendationServiceInsufficientClicksCampaign).nullable()
}).nullable();

export type RecommendationServiceInsufficientClicks = z.infer<typeof RecommendationServiceInsufficientClicks>;
