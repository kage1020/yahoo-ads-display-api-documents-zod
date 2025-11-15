import { z } from 'zod';

import { error } from '../../common/Error';
import { balanceServiceAvailableBalancePage } from './BalanceServiceAvailableBalancePage';

export const balanceServiceGetAvailableBalanceResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: balanceServiceAvailableBalancePage
}).nullable();

export type BalanceServiceGetAvailableBalanceResponse = z.infer<typeof balanceServiceGetAvailableBalanceResponse>;
