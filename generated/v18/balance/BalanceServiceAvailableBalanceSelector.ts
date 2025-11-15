import { z } from 'zod';

export const balanceServiceAvailableBalanceSelector = z.object({
  accountId: z.number().int()
}).nullable();

export type BalanceServiceAvailableBalanceSelector = z.infer<typeof balanceServiceAvailableBalanceSelector>;
