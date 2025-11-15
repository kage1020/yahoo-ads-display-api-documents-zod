import { z } from 'zod';

export const AppLinkServiceAppLinkStatus = z.enum(["ENABLED", "DISABLED", "UNKNOWN"]).nullable();

export type AppLinkServiceAppLinkStatus = z.infer<typeof AppLinkServiceAppLinkStatus>;
