import { z } from 'zod';

export const campaignServiceFrequencyLevel = z.enum(["CAMPAIGN", "AD_GROUP", "AD", "UNKNOWN"]).nullable();

export type CampaignServiceFrequencyLevel = z.infer<typeof campaignServiceFrequencyLevel>;
