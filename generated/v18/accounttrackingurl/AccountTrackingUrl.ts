import { z } from 'zod';

import { AccountTrackingUrlServiceIsRemoveFlg } from './AccountTrackingUrlServiceIsRemoveFlg';

export const AccountTrackingUrl = z.object({
  accountId: z.number().int().nullable(),
  accountName: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  isRemoveTrackingUrl: AccountTrackingUrlServiceIsRemoveFlg
}).nullable();

export type AccountTrackingUrl = z.infer<typeof AccountTrackingUrl>;
