import { z } from 'zod';

import { recommendationServiceEnhancedCpcCampaign } from './RecommendationServiceEnhancedCpcCampaign';

export const recommendationServiceEnhancedCpc = z.object({
  enhancedCpcCampaignList: z.array(recommendationServiceEnhancedCpcCampaign).nullable()
}).nullable();

export type RecommendationServiceEnhancedCpc = z.infer<typeof recommendationServiceEnhancedCpc>;
