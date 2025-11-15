import { z } from 'zod';

import { guaranteedAdGroup } from './GuaranteedAdGroup';
import { error } from '../../common/Error';

export const guaranteedAdGroupServiceValue = z.object({
  adGroup: guaranteedAdGroup,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type GuaranteedAdGroupServiceValue = z.infer<typeof guaranteedAdGroupServiceValue>;
