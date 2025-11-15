import { z } from 'zod';

import { guaranteedCampaignServiceFrequencyLevel } from './GuaranteedCampaignServiceFrequencyLevel';
import { guaranteedCampaignServiceFrequencyTimeUnit } from './GuaranteedCampaignServiceFrequencyTimeUnit';

export const guaranteedCampaignServiceViewableFrequencyCap = z.object({
  frequencyLevel: guaranteedCampaignServiceFrequencyLevel,
  frequencyTimeUnit: guaranteedCampaignServiceFrequencyTimeUnit,
  vImps: z.number().int().nullable()
}).nullable();

export type GuaranteedCampaignServiceViewableFrequencyCap = z.infer<typeof guaranteedCampaignServiceViewableFrequencyCap>;
