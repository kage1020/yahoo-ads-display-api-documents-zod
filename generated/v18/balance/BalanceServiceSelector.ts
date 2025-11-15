import { z } from 'zod';

export const BalanceServiceSelector = z.object({
  accountId: z.number().int()
}).nullable();

export type BalanceServiceSelector = z.infer<typeof BalanceServiceSelector>;
