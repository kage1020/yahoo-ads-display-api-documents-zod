import { z } from 'zod';

import { RecommendationServiceEnhancedCpcCampaign } from './RecommendationServiceEnhancedCpcCampaign';

export const RecommendationServiceEnhancedCpc = z.object({
  enhancedCpcCampaignList: z.array(RecommendationServiceEnhancedCpcCampaign).nullable()
}).nullable();

export type RecommendationServiceEnhancedCpc = z.infer<typeof RecommendationServiceEnhancedCpc>;
