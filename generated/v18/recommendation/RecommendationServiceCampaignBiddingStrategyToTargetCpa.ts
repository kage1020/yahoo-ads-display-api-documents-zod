import { z } from 'zod';

import { recommendationServiceCampaignBiddingStrategyToTargetCpaCampaign } from './RecommendationServiceCampaignBiddingStrategyToTargetCpaCampaign';

export const recommendationServiceCampaignBiddingStrategyToTargetCpa = z.object({
  campaignBiddingStrategyToTargetCpaCampaignList: z.array(recommendationServiceCampaignBiddingStrategyToTargetCpaCampaign).nullable()
}).nullable();

export type RecommendationServiceCampaignBiddingStrategyToTargetCpa = z.infer<typeof recommendationServiceCampaignBiddingStrategyToTargetCpa>;
