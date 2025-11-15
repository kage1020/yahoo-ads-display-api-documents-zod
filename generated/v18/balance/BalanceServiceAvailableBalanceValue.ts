import { z } from 'zod';

import { AvailableBalance } from './AvailableBalance';
import { Error } from './Error';

export const BalanceServiceAvailableBalanceValue = z.object({
  availableBalance: AvailableBalance,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BalanceServiceAvailableBalanceValue = z.infer<typeof BalanceServiceAvailableBalanceValue>;
