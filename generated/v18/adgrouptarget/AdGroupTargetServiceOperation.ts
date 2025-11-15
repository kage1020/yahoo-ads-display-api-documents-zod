import { z } from 'zod';

import { adGroupTarget } from './AdGroupTarget';

export const adGroupTargetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupTarget)
}).nullable();

export type AdGroupTargetServiceOperation = z.infer<typeof adGroupTargetServiceOperation>;
