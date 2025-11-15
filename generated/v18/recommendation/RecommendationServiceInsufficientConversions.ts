import { z } from 'zod';

import { RecommendationServiceInsufficientConversionsCampaign } from './RecommendationServiceInsufficientConversionsCampaign';

export const RecommendationServiceInsufficientConversions = z.object({
  insufficientConversionsCampaignList: z.array(RecommendationServiceInsufficientConversionsCampaign).nullable()
}).nullable();

export type RecommendationServiceInsufficientConversions = z.infer<typeof RecommendationServiceInsufficientConversions>;
