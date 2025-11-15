import { z } from 'zod';

import { recommendationServiceInsufficientVideoViewsCampaign } from './RecommendationServiceInsufficientVideoViewsCampaign';

export const recommendationServiceInsufficientVideoViews = z.object({
  insufficientVideoViewsCampaignList: z.array(recommendationServiceInsufficientVideoViewsCampaign).nullable()
}).nullable();

export type RecommendationServiceInsufficientVideoViews = z.infer<typeof recommendationServiceInsufficientVideoViews>;
