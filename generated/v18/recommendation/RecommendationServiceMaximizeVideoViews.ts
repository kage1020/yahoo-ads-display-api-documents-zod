import { z } from 'zod';

import { recommendationServiceMaximizeVideoViewsCampaign } from './RecommendationServiceMaximizeVideoViewsCampaign';

export const recommendationServiceMaximizeVideoViews = z.object({
  maximizeVideoViewsCampaignList: z.array(recommendationServiceMaximizeVideoViewsCampaign).nullable()
}).nullable();

export type RecommendationServiceMaximizeVideoViews = z.infer<typeof recommendationServiceMaximizeVideoViews>;
