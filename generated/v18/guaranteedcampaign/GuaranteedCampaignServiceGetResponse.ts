import { z } from 'zod';

import { Error } from './Error';
import { GuaranteedCampaignServicePage } from './GuaranteedCampaignServicePage';

export const GuaranteedCampaignServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: GuaranteedCampaignServicePage
}).nullable();

export type GuaranteedCampaignServiceGetResponse = z.infer<typeof GuaranteedCampaignServiceGetResponse>;
