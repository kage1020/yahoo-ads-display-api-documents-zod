import { z } from 'zod';

export const accountAuthority = z.object({
  accountId: z.number().int().nullable(),
  authorities: z.array(z.string().nullable()).nullable()
}).nullable();

export type AccountAuthority = z.infer<typeof accountAuthority>;
