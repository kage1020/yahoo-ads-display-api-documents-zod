import { z } from 'zod';

import { recommendationServiceMaximizeViewableImpressionsCampaign } from './RecommendationServiceMaximizeViewableImpressionsCampaign';

export const recommendationServiceMaximizeViewableImpressions = z.object({
  maximizeViewableImpressionsCampaignList: z.array(recommendationServiceMaximizeViewableImpressionsCampaign).nullable()
}).nullable();

export type RecommendationServiceMaximizeViewableImpressions = z.infer<typeof recommendationServiceMaximizeViewableImpressions>;
