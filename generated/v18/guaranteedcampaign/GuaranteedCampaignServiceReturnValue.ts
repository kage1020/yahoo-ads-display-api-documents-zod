import { z } from 'zod';

import { GuaranteedCampaignServiceValue } from './GuaranteedCampaignServiceValue';

export const GuaranteedCampaignServiceReturnValue = z.object({
  values: z.array(GuaranteedCampaignServiceValue).nullable()
}).nullable();

export type GuaranteedCampaignServiceReturnValue = z.infer<typeof GuaranteedCampaignServiceReturnValue>;
