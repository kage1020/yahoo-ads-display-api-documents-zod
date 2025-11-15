import { z } from 'zod';

import { CampaignServiceFrequencyLevel } from './CampaignServiceFrequencyLevel';
import { CampaignServiceFrequencyTimeUnit } from './CampaignServiceFrequencyTimeUnit';

export const CampaignServiceViewableFrequencyCap = z.object({
  frequencyLevel: CampaignServiceFrequencyLevel,
  frequencyTimeUnit: CampaignServiceFrequencyTimeUnit,
  vImps: z.number().int().nullable()
}).nullable();

export type CampaignServiceViewableFrequencyCap = z.infer<typeof CampaignServiceViewableFrequencyCap>;
