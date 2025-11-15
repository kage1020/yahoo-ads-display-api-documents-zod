import { z } from 'zod';

import { Error } from './Error';
import { AccountAuthorityServicePage } from './AccountAuthorityServicePage';

export const AccountAuthorityServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AccountAuthorityServicePage
}).nullable();

export type AccountAuthorityServiceGetResponse = z.infer<typeof AccountAuthorityServiceGetResponse>;
