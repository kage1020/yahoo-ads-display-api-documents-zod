import { z } from 'zod';

import { GuaranteedAdGroup } from './GuaranteedAdGroup';

export const GuaranteedAdGroupServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(GuaranteedAdGroup)
}).nullable();

export type GuaranteedAdGroupServiceOperation = z.infer<typeof GuaranteedAdGroupServiceOperation>;
