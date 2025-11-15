import { z } from 'zod';

import { error } from '../../common/Error';
import { guaranteedAdGroupAdServicePage } from './GuaranteedAdGroupAdServicePage';

export const guaranteedAdGroupAdServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: guaranteedAdGroupAdServicePage
}).nullable();

export type GuaranteedAdGroupAdServiceGetResponse = z.infer<typeof guaranteedAdGroupAdServiceGetResponse>;
