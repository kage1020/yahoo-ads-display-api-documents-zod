import { z } from 'zod';

export const appLinkServiceAppVendor = z.enum(["ADJUST", "APPSFLYER", "KOCHAVA", "SINGULAR", "UNKNOWN"]).nullable();

export type AppLinkServiceAppVendor = z.infer<typeof appLinkServiceAppVendor>;
