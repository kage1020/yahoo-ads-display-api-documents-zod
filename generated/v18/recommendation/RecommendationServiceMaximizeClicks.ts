import { z } from 'zod';

import { recommendationServiceMaximizeClicksCampaign } from './RecommendationServiceMaximizeClicksCampaign';

export const recommendationServiceMaximizeClicks = z.object({
  maximizeClicksCampaignList: z.array(recommendationServiceMaximizeClicksCampaign).nullable()
}).nullable();

export type RecommendationServiceMaximizeClicks = z.infer<typeof recommendationServiceMaximizeClicks>;
