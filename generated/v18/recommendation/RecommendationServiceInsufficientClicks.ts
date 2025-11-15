import { z } from 'zod';

import { recommendationServiceInsufficientClicksCampaign } from './RecommendationServiceInsufficientClicksCampaign';

export const recommendationServiceInsufficientClicks = z.object({
  insufficientClicksCampaignList: z.array(recommendationServiceInsufficientClicksCampaign).nullable()
}).nullable();

export type RecommendationServiceInsufficientClicks = z.infer<typeof recommendationServiceInsufficientClicks>;
