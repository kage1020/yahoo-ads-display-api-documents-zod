import { z } from 'zod';

import { guaranteedCampaign } from './GuaranteedCampaign';
import { error } from '../../common/Error';

export const guaranteedCampaignServiceValue = z.object({
  campaign: guaranteedCampaign,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type GuaranteedCampaignServiceValue = z.infer<typeof guaranteedCampaignServiceValue>;
