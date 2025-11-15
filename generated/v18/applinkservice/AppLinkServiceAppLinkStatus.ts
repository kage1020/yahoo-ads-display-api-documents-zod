import { z } from 'zod';

export const appLinkServiceAppLinkStatus = z.enum(["ENABLED", "DISABLED", "UNKNOWN"]).nullable();

export type AppLinkServiceAppLinkStatus = z.infer<typeof appLinkServiceAppLinkStatus>;
