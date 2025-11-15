import { z } from 'zod';

import { recommendationServiceInsufficientConversionsCampaign } from './RecommendationServiceInsufficientConversionsCampaign';

export const recommendationServiceInsufficientConversions = z.object({
  insufficientConversionsCampaignList: z.array(recommendationServiceInsufficientConversionsCampaign).nullable()
}).nullable();

export type RecommendationServiceInsufficientConversions = z.infer<typeof recommendationServiceInsufficientConversions>;
