import { z } from 'zod';

import { error } from '../../common/Error';
import { guaranteedCampaignServicePage } from './GuaranteedCampaignServicePage';

export const guaranteedCampaignServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: guaranteedCampaignServicePage
}).nullable();

export type GuaranteedCampaignServiceGetResponse = z.infer<typeof guaranteedCampaignServiceGetResponse>;
