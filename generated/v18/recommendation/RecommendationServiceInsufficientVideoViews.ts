import { z } from 'zod';

import { RecommendationServiceInsufficientVideoViewsCampaign } from './RecommendationServiceInsufficientVideoViewsCampaign';

export const RecommendationServiceInsufficientVideoViews = z.object({
  insufficientVideoViewsCampaignList: z.array(RecommendationServiceInsufficientVideoViewsCampaign).nullable()
}).nullable();

export type RecommendationServiceInsufficientVideoViews = z.infer<typeof RecommendationServiceInsufficientVideoViews>;
