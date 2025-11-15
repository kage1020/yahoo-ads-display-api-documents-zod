import { z } from 'zod';

import { RecommendationServiceMaximizeClicksCampaign } from './RecommendationServiceMaximizeClicksCampaign';

export const RecommendationServiceMaximizeClicks = z.object({
  maximizeClicksCampaignList: z.array(RecommendationServiceMaximizeClicksCampaign).nullable()
}).nullable();

export type RecommendationServiceMaximizeClicks = z.infer<typeof RecommendationServiceMaximizeClicks>;
