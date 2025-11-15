import { z } from 'zod';

export const guaranteedCampaignServiceFrequencyLevel = z.enum(["CAMPAIGN", "UNKNOWN"]).nullable();

export type GuaranteedCampaignServiceFrequencyLevel = z.infer<typeof guaranteedCampaignServiceFrequencyLevel>;
