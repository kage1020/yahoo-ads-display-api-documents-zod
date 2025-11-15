import { z } from 'zod';

export const guaranteedCampaignServiceCampaignBiddingStrategyType = z.enum(["VCPM", "SOV", "UNKNOWN"]).nullable();

export type GuaranteedCampaignServiceCampaignBiddingStrategyType = z.infer<typeof guaranteedCampaignServiceCampaignBiddingStrategyType>;
