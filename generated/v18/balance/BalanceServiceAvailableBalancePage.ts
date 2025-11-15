import { z } from 'zod';

import { balanceServiceAvailableBalanceValue } from './BalanceServiceAvailableBalanceValue';

export const balanceServiceAvailableBalancePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(balanceServiceAvailableBalanceValue).nullable()
}).nullable();

export type BalanceServiceAvailableBalancePage = z.infer<typeof balanceServiceAvailableBalancePage>;
