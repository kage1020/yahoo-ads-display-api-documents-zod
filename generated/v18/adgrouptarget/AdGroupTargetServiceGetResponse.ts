import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupTargetServicePage } from './AdGroupTargetServicePage';

export const adGroupTargetServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupTargetServicePage
}).nullable();

export type AdGroupTargetServiceGetResponse = z.infer<typeof adGroupTargetServiceGetResponse>;
