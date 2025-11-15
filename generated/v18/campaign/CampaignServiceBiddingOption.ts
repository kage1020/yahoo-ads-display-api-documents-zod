import { z } from 'zod';

export const CampaignServiceBiddingOption = z.enum(["VCPM", "CPC", "CPV", "UNKNOWN"]).nullable();

export type CampaignServiceBiddingOption = z.infer<typeof CampaignServiceBiddingOption>;
