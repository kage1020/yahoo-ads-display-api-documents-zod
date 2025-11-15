import { z } from 'zod';

export const AppLinkServiceAppVendor = z.enum(["ADJUST", "APPSFLYER", "KOCHAVA", "SINGULAR", "UNKNOWN"]).nullable();

export type AppLinkServiceAppVendor = z.infer<typeof AppLinkServiceAppVendor>;
