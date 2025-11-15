import { z } from 'zod';

import { BalanceServiceAvailableBalanceValue } from './BalanceServiceAvailableBalanceValue';

export const BalanceServiceAvailableBalancePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(BalanceServiceAvailableBalanceValue).nullable()
}).nullable();

export type BalanceServiceAvailableBalancePage = z.infer<typeof BalanceServiceAvailableBalancePage>;
