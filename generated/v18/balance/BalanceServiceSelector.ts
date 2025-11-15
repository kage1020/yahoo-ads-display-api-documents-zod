import { z } from 'zod';

export const balanceServiceSelector = z.object({
  accountId: z.number().int()
}).nullable();

export type BalanceServiceSelector = z.infer<typeof balanceServiceSelector>;
