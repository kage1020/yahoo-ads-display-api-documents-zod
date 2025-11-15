import { z } from 'zod';

export const campaignServiceFrequencyTimeUnit = z.enum(["DAY", "WEEK", "MONTH", "UNKNOWN"]).nullable();

export type CampaignServiceFrequencyTimeUnit = z.infer<typeof campaignServiceFrequencyTimeUnit>;
