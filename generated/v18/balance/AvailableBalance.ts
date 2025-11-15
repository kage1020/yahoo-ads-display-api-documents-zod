import { z } from 'zod';

export const AvailableBalance = z.object({
  accountId: z.number().int().nullable(),
  availableBalance: z.number().int().nullable()
}).nullable();

export type AvailableBalance = z.infer<typeof AvailableBalance>;
