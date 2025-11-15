import { z } from 'zod';

import { AdGroupTarget } from './AdGroupTarget';

export const AdGroupTargetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupTarget)
}).nullable();

export type AdGroupTargetServiceOperation = z.infer<typeof AdGroupTargetServiceOperation>;
