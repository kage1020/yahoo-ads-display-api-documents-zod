import { z } from 'zod';

export const appLinkServiceAppPlatform = z.enum(["IOS", "ANDROID", "UNKNOWN"]).nullable();

export type AppLinkServiceAppPlatform = z.infer<typeof appLinkServiceAppPlatform>;
