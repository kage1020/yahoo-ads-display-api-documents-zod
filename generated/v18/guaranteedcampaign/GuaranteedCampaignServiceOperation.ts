import { z } from 'zod';

import { guaranteedCampaign } from './GuaranteedCampaign';

export const guaranteedCampaignServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(guaranteedCampaign)
}).nullable();

export type GuaranteedCampaignServiceOperation = z.infer<typeof guaranteedCampaignServiceOperation>;
