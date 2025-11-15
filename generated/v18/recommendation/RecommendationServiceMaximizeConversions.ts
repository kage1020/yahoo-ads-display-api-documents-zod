import { z } from 'zod';

import { RecommendationServiceMaximizeConversionsCampaign } from './RecommendationServiceMaximizeConversionsCampaign';

export const RecommendationServiceMaximizeConversions = z.object({
  maximizeConversionsCampaignList: z.array(RecommendationServiceMaximizeConversionsCampaign).nullable()
}).nullable();

export type RecommendationServiceMaximizeConversions = z.infer<typeof RecommendationServiceMaximizeConversions>;
