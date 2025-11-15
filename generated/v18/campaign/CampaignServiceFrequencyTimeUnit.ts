import { z } from 'zod';

export const CampaignServiceFrequencyTimeUnit = z.enum(["DAY", "WEEK", "MONTH", "UNKNOWN"]).nullable();

export type CampaignServiceFrequencyTimeUnit = z.infer<typeof CampaignServiceFrequencyTimeUnit>;
