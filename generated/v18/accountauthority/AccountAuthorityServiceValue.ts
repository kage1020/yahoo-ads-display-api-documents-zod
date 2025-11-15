import { z } from 'zod';

import { AccountAuthority } from './AccountAuthority';
import { Error } from './Error';

export const AccountAuthorityServiceValue = z.object({
  accountAuthority: AccountAuthority,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountAuthorityServiceValue = z.infer<typeof AccountAuthorityServiceValue>;
