import { z } from 'zod';

import { guaranteedCampaignServiceCampaignBiddingStrategyType } from './GuaranteedCampaignServiceCampaignBiddingStrategyType';

export const guaranteedCampaignServiceCampaignBiddingStrategy = z.object({
  campaignBiddingStrategyType: guaranteedCampaignServiceCampaignBiddingStrategyType,
  vcpmBidValue: z.number().int().nullable(),
  sovRate: z.number().int().nullable()
}).nullable();

export type GuaranteedCampaignServiceCampaignBiddingStrategy = z.infer<typeof guaranteedCampaignServiceCampaignBiddingStrategy>;
