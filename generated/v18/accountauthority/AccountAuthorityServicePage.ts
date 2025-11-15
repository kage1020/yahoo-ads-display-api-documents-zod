import { z } from 'zod';

import { accountAuthorityServiceValue } from './AccountAuthorityServiceValue';

export const accountAuthorityServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(accountAuthorityServiceValue).nullable()
}).nullable();

export type AccountAuthorityServicePage = z.infer<typeof accountAuthorityServicePage>;
