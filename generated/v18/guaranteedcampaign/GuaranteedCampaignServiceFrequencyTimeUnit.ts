import { z } from 'zod';

export const GuaranteedCampaignServiceFrequencyTimeUnit = z.enum(["DAY", "WEEK", "MONTH", "LIFETIME", "UNKNOWN"]).nullable();

export type GuaranteedCampaignServiceFrequencyTimeUnit = z.infer<typeof GuaranteedCampaignServiceFrequencyTimeUnit>;
