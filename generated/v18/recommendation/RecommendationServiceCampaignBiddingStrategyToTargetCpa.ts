import { z } from 'zod';

import { RecommendationServiceCampaignBiddingStrategyToTargetCpaCampaign } from './RecommendationServiceCampaignBiddingStrategyToTargetCpaCampaign';

export const RecommendationServiceCampaignBiddingStrategyToTargetCpa = z.object({
  campaignBiddingStrategyToTargetCpaCampaignList: z.array(RecommendationServiceCampaignBiddingStrategyToTargetCpaCampaign).nullable()
}).nullable();

export type RecommendationServiceCampaignBiddingStrategyToTargetCpa = z.infer<typeof RecommendationServiceCampaignBiddingStrategyToTargetCpa>;
