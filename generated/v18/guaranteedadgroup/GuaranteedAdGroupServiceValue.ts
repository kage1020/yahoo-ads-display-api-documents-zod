import { z } from 'zod';

import { GuaranteedAdGroup } from './GuaranteedAdGroup';
import { Error } from './Error';

export const GuaranteedAdGroupServiceValue = z.object({
  adGroup: GuaranteedAdGroup,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type GuaranteedAdGroupServiceValue = z.infer<typeof GuaranteedAdGroupServiceValue>;
