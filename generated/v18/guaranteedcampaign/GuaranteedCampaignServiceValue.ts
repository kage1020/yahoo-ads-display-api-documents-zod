import { z } from 'zod';

import { GuaranteedCampaign } from './GuaranteedCampaign';
import { Error } from './Error';

export const GuaranteedCampaignServiceValue = z.object({
  campaign: GuaranteedCampaign,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type GuaranteedCampaignServiceValue = z.infer<typeof GuaranteedCampaignServiceValue>;
