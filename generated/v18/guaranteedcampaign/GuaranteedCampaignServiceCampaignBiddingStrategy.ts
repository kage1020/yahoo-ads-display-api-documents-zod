import { z } from 'zod';

import { GuaranteedCampaignServiceCampaignBiddingStrategyType } from './GuaranteedCampaignServiceCampaignBiddingStrategyType';

export const GuaranteedCampaignServiceCampaignBiddingStrategy = z.object({
  campaignBiddingStrategyType: GuaranteedCampaignServiceCampaignBiddingStrategyType,
  vcpmBidValue: z.number().int().nullable(),
  sovRate: z.number().int().nullable()
}).nullable();

export type GuaranteedCampaignServiceCampaignBiddingStrategy = z.infer<typeof GuaranteedCampaignServiceCampaignBiddingStrategy>;
