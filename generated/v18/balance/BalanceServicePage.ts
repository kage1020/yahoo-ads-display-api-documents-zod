import { z } from 'zod';

import { BalanceServiceValue } from './BalanceServiceValue';

export const BalanceServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: BalanceServiceValue
}).nullable();

export type BalanceServicePage = z.infer<typeof BalanceServicePage>;
