import { z } from 'zod';

import { GuaranteedCampaignServiceValue } from './GuaranteedCampaignServiceValue';

export const GuaranteedCampaignServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(GuaranteedCampaignServiceValue).nullable()
}).nullable();

export type GuaranteedCampaignServicePage = z.infer<typeof GuaranteedCampaignServicePage>;
