import { z } from 'zod';

import { campaignServiceFrequencyLevel } from './CampaignServiceFrequencyLevel';
import { campaignServiceFrequencyTimeUnit } from './CampaignServiceFrequencyTimeUnit';

export const campaignServiceViewableFrequencyCap = z.object({
  frequencyLevel: campaignServiceFrequencyLevel,
  frequencyTimeUnit: campaignServiceFrequencyTimeUnit,
  vImps: z.number().int().nullable()
}).nullable();

export type CampaignServiceViewableFrequencyCap = z.infer<typeof campaignServiceViewableFrequencyCap>;
