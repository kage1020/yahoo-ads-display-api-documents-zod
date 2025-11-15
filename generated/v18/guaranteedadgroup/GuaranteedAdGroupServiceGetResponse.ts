import { z } from 'zod';

import { error } from '../../common/Error';
import { guaranteedAdGroupServicePage } from './GuaranteedAdGroupServicePage';

export const guaranteedAdGroupServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: guaranteedAdGroupServicePage
}).nullable();

export type GuaranteedAdGroupServiceGetResponse = z.infer<typeof guaranteedAdGroupServiceGetResponse>;
