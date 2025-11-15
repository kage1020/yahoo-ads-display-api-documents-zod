import { z } from 'zod';

import { appLinkServiceCategoryType } from './AppLinkServiceCategoryType';
import { appLinkServiceAppPlatform } from './AppLinkServiceAppPlatform';
import { appLinkServiceAppVendor } from './AppLinkServiceAppVendor';
import { appLinkServiceAppLinkStatus } from './AppLinkServiceAppLinkStatus';

export const appLink = z.object({
  accountId: z.number().int().nullable(),
  categoryType: appLinkServiceCategoryType,
  linkId: z.string().nullable(),
  appPlatform: appLinkServiceAppPlatform,
  appId: z.string().nullable(),
  appVendor: appLinkServiceAppVendor,
  appLinkStatus: appLinkServiceAppLinkStatus
}).nullable();

export type AppLink = z.infer<typeof appLink>;
