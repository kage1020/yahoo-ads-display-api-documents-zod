import { z } from 'zod';

export const BalanceServiceAvailableBalanceSelector = z.object({
  accountId: z.number().int()
}).nullable();

export type BalanceServiceAvailableBalanceSelector = z.infer<typeof BalanceServiceAvailableBalanceSelector>;
