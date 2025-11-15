import { z } from 'zod';

import { AppLinkServiceCategoryType } from './AppLinkServiceCategoryType';
import { AppLinkServiceAppPlatform } from './AppLinkServiceAppPlatform';
import { AppLinkServiceAppVendor } from './AppLinkServiceAppVendor';
import { AppLinkServiceAppLinkStatus } from './AppLinkServiceAppLinkStatus';

export const AppLink = z.object({
  accountId: z.number().int().nullable(),
  categoryType: AppLinkServiceCategoryType,
  linkId: z.string().nullable(),
  appPlatform: AppLinkServiceAppPlatform,
  appId: z.string().nullable(),
  appVendor: AppLinkServiceAppVendor,
  appLinkStatus: AppLinkServiceAppLinkStatus
}).nullable();

export type AppLink = z.infer<typeof AppLink>;
