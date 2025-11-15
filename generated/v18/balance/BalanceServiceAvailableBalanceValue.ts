import { z } from 'zod';

import { availableBalance } from './AvailableBalance';
import { error } from '../../common/Error';

export const balanceServiceAvailableBalanceValue = z.object({
  availableBalance: availableBalance,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BalanceServiceAvailableBalanceValue = z.infer<typeof balanceServiceAvailableBalanceValue>;
