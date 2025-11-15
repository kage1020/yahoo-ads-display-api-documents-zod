import { z } from 'zod';

import { GuaranteedAdGroupAd } from './GuaranteedAdGroupAd';
import { Error } from './Error';

export const GuaranteedAdGroupAdServiceValue = z.object({
  adGroupAd: GuaranteedAdGroupAd,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceValue = z.infer<typeof GuaranteedAdGroupAdServiceValue>;
