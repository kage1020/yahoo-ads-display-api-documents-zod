import { z } from 'zod';

import { recommendationServiceMaximizeConversionsCampaign } from './RecommendationServiceMaximizeConversionsCampaign';

export const recommendationServiceMaximizeConversions = z.object({
  maximizeConversionsCampaignList: z.array(recommendationServiceMaximizeConversionsCampaign).nullable()
}).nullable();

export type RecommendationServiceMaximizeConversions = z.infer<typeof recommendationServiceMaximizeConversions>;
