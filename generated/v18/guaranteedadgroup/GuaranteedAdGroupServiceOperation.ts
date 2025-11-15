import { z } from 'zod';

import { guaranteedAdGroup } from './GuaranteedAdGroup';

export const guaranteedAdGroupServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(guaranteedAdGroup)
}).nullable();

export type GuaranteedAdGroupServiceOperation = z.infer<typeof guaranteedAdGroupServiceOperation>;
