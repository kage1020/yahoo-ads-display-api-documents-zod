import { z } from 'zod';

export const abTestServiceSelector = z.object({
  accountId: z.number().int().nullable(),
  abTestIds: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type AbTestServiceSelector = z.infer<typeof abTestServiceSelector>;
