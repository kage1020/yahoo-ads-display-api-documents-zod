import { z } from 'zod';

export const campaignServiceBiddingOption = z.enum(["VCPM", "CPC", "CPV", "UNKNOWN"]).nullable();

export type CampaignServiceBiddingOption = z.infer<typeof campaignServiceBiddingOption>;
