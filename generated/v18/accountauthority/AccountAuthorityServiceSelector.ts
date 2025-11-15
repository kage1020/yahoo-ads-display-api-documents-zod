import { z } from 'zod';

export const AccountAuthorityServiceSelector = z.object({
  accountIds: z.array(z.number().int().nullable()),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AccountAuthorityServiceSelector = z.infer<typeof AccountAuthorityServiceSelector>;
