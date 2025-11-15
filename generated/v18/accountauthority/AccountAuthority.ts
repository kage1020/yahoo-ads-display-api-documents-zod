import { z } from 'zod';

export const AccountAuthority = z.object({
  accountId: z.number().int().nullable(),
  authorities: z.array(z.string().nullable()).nullable()
}).nullable();

export type AccountAuthority = z.infer<typeof AccountAuthority>;
