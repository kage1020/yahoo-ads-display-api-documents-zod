import { z } from 'zod';

import { guaranteedAdGroupAd } from './GuaranteedAdGroupAd';
import { error } from '../../common/Error';

export const guaranteedAdGroupAdServiceValue = z.object({
  adGroupAd: guaranteedAdGroupAd,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceValue = z.infer<typeof guaranteedAdGroupAdServiceValue>;
