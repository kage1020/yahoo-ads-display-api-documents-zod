import { z } from 'zod';

export const CampaignServiceFrequencyLevel = z.enum(["CAMPAIGN", "AD_GROUP", "AD", "UNKNOWN"]).nullable();

export type CampaignServiceFrequencyLevel = z.infer<typeof CampaignServiceFrequencyLevel>;
