import { z } from 'zod';

import { GuaranteedCampaignServiceFrequencyLevel } from './GuaranteedCampaignServiceFrequencyLevel';
import { GuaranteedCampaignServiceFrequencyTimeUnit } from './GuaranteedCampaignServiceFrequencyTimeUnit';

export const GuaranteedCampaignServiceViewableFrequencyCap = z.object({
  frequencyLevel: GuaranteedCampaignServiceFrequencyLevel,
  frequencyTimeUnit: GuaranteedCampaignServiceFrequencyTimeUnit,
  vImps: z.number().int().nullable()
}).nullable();

export type GuaranteedCampaignServiceViewableFrequencyCap = z.infer<typeof GuaranteedCampaignServiceViewableFrequencyCap>;
