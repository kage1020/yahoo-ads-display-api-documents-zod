import { z } from 'zod';

import { RecommendationServiceMaximizeVideoViewsCampaign } from './RecommendationServiceMaximizeVideoViewsCampaign';

export const RecommendationServiceMaximizeVideoViews = z.object({
  maximizeVideoViewsCampaignList: z.array(RecommendationServiceMaximizeVideoViewsCampaign).nullable()
}).nullable();

export type RecommendationServiceMaximizeVideoViews = z.infer<typeof RecommendationServiceMaximizeVideoViews>;
