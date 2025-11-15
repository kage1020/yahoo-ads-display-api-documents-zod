import { z } from 'zod';

import { Error } from './Error';
import { BalanceServiceAvailableBalancePage } from './BalanceServiceAvailableBalancePage';

export const BalanceServiceGetAvailableBalanceResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: BalanceServiceAvailableBalancePage
}).nullable();

export type BalanceServiceGetAvailableBalanceResponse = z.infer<typeof BalanceServiceGetAvailableBalanceResponse>;
