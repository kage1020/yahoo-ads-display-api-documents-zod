import { z } from 'zod';

export const GuaranteedCampaignServiceCampaignBiddingStrategyType = z.enum(["VCPM", "SOV", "UNKNOWN"]).nullable();

export type GuaranteedCampaignServiceCampaignBiddingStrategyType = z.infer<typeof GuaranteedCampaignServiceCampaignBiddingStrategyType>;
