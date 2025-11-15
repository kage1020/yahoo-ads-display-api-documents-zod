import { z } from 'zod';

import { guaranteedCampaignServiceValue } from './GuaranteedCampaignServiceValue';

export const guaranteedCampaignServiceReturnValue = z.object({
  values: z.array(guaranteedCampaignServiceValue).nullable()
}).nullable();

export type GuaranteedCampaignServiceReturnValue = z.infer<typeof guaranteedCampaignServiceReturnValue>;
