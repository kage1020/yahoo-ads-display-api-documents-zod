import { z } from 'zod';

import { AccountAuthorityServiceValue } from './AccountAuthorityServiceValue';

export const AccountAuthorityServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AccountAuthorityServiceValue).nullable()
}).nullable();

export type AccountAuthorityServicePage = z.infer<typeof AccountAuthorityServicePage>;
