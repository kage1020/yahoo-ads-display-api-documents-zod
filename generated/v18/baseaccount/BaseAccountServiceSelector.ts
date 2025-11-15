import { z } from 'zod';

import { baseAccountServiceAccountStatus } from './BaseAccountServiceAccountStatus';
import { baseAccountServiceAuthType } from './BaseAccountServiceAuthType';
import { baseAccountServiceIncludeAdminAuth } from './BaseAccountServiceIncludeAdminAuth';
import { baseAccountServiceIncludeMccAccount } from './BaseAccountServiceIncludeMccAccount';
import { baseAccountServiceIncludeTestAccount } from './BaseAccountServiceIncludeTestAccount';

export const baseAccountServiceSelector = z.object({
  accountIds: z.array(z.number().int().nullable()).nullable(),
  accountName: z.string().nullable(),
  accountStatuses: z.array(baseAccountServiceAccountStatus).nullable(),
  authType: baseAccountServiceAuthType,
  includeAdminAuth: baseAccountServiceIncludeAdminAuth,
  includeMccAccount: baseAccountServiceIncludeMccAccount,
  includeTestAccount: baseAccountServiceIncludeTestAccount,
  numberResults: z.number().int().min(1).max(200).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type BaseAccountServiceSelector = z.infer<typeof baseAccountServiceSelector>;
