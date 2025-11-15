import { z } from 'zod';

import { RecommendationServiceMaximizeViewableImpressionsCampaign } from './RecommendationServiceMaximizeViewableImpressionsCampaign';

export const RecommendationServiceMaximizeViewableImpressions = z.object({
  maximizeViewableImpressionsCampaignList: z.array(RecommendationServiceMaximizeViewableImpressionsCampaign).nullable()
}).nullable();

export type RecommendationServiceMaximizeViewableImpressions = z.infer<typeof RecommendationServiceMaximizeViewableImpressions>;
