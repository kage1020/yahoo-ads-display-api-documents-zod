import { z } from 'zod';

import { Error } from './Error';
import { GuaranteedCampaignServiceReturnValue } from './GuaranteedCampaignServiceReturnValue';

export const GuaranteedCampaignServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: GuaranteedCampaignServiceReturnValue
}).nullable();

export type GuaranteedCampaignServiceMutateResponse = z.infer<typeof GuaranteedCampaignServiceMutateResponse>;
