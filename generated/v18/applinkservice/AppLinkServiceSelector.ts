import { z } from 'zod';

import { AppLinkServiceAppVendor } from './AppLinkServiceAppVendor';
import { AppLinkServiceAppPlatform } from './AppLinkServiceAppPlatform';
import { AppLinkServiceAppLinkStatus } from './AppLinkServiceAppLinkStatus';

export const AppLinkServiceSelector = z.object({
  accountId: z.number().int(),
  appVendors: z.array(AppLinkServiceAppVendor).nullable(),
  linkIds: z.array(z.string().nullable()).nullable(),
  appPlatform: AppLinkServiceAppPlatform,
  appLinkStatus: AppLinkServiceAppLinkStatus,
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AppLinkServiceSelector = z.infer<typeof AppLinkServiceSelector>;
