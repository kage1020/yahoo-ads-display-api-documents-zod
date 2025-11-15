import { z } from 'zod';

import { error } from '../../common/Error';
import { guaranteedCampaignServiceReturnValue } from './GuaranteedCampaignServiceReturnValue';

export const guaranteedCampaignServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: guaranteedCampaignServiceReturnValue
}).nullable();

export type GuaranteedCampaignServiceMutateResponse = z.infer<typeof guaranteedCampaignServiceMutateResponse>;
