import { z } from 'zod';

export const GuaranteedCampaignServiceFrequencyLevel = z.enum(["CAMPAIGN", "UNKNOWN"]).nullable();

export type GuaranteedCampaignServiceFrequencyLevel = z.infer<typeof GuaranteedCampaignServiceFrequencyLevel>;
