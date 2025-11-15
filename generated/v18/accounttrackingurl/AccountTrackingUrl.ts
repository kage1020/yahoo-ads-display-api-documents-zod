import { z } from 'zod';

import { accountTrackingUrlServiceIsRemoveFlg } from './AccountTrackingUrlServiceIsRemoveFlg';

export const accountTrackingUrl = z.object({
  accountId: z.number().int().nullable(),
  accountName: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  isRemoveTrackingUrl: accountTrackingUrlServiceIsRemoveFlg
}).nullable();

export type AccountTrackingUrl = z.infer<typeof accountTrackingUrl>;
