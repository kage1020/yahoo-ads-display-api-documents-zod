import { z } from 'zod';

export const AppLinkServiceAppPlatform = z.enum(["IOS", "ANDROID", "UNKNOWN"]).nullable();

export type AppLinkServiceAppPlatform = z.infer<typeof AppLinkServiceAppPlatform>;
