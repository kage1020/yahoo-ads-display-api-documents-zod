import { z } from 'zod';

import { accountAuthority } from './AccountAuthority';
import { error } from '../../common/Error';

export const accountAuthorityServiceValue = z.object({
  accountAuthority: accountAuthority,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountAuthorityServiceValue = z.infer<typeof accountAuthorityServiceValue>;
