import { z } from 'zod';

import { appLinkServiceAppVendor } from './AppLinkServiceAppVendor';
import { appLinkServiceAppPlatform } from './AppLinkServiceAppPlatform';
import { appLinkServiceAppLinkStatus } from './AppLinkServiceAppLinkStatus';

export const appLinkServiceSelector = z.object({
  accountId: z.number().int(),
  appVendors: z.array(appLinkServiceAppVendor).nullable(),
  linkIds: z.array(z.string().nullable()).nullable(),
  appPlatform: appLinkServiceAppPlatform,
  appLinkStatus: appLinkServiceAppLinkStatus,
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AppLinkServiceSelector = z.infer<typeof appLinkServiceSelector>;
