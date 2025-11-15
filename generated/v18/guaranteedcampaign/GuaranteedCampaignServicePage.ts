import { z } from 'zod';

import { guaranteedCampaignServiceValue } from './GuaranteedCampaignServiceValue';

export const guaranteedCampaignServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(guaranteedCampaignServiceValue).nullable()
}).nullable();

export type GuaranteedCampaignServicePage = z.infer<typeof guaranteedCampaignServicePage>;
