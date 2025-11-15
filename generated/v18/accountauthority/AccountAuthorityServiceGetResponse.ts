import { z } from 'zod';

import { error } from '../../common/Error';
import { accountAuthorityServicePage } from './AccountAuthorityServicePage';

export const accountAuthorityServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: accountAuthorityServicePage
}).nullable();

export type AccountAuthorityServiceGetResponse = z.infer<typeof accountAuthorityServiceGetResponse>;
