import { z } from 'zod';

import { GuaranteedCampaign } from './GuaranteedCampaign';

export const GuaranteedCampaignServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(GuaranteedCampaign)
}).nullable();

export type GuaranteedCampaignServiceOperation = z.infer<typeof GuaranteedCampaignServiceOperation>;
