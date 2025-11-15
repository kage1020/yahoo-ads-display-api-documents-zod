import { z } from 'zod';

export const AudienceListServiceAppPlatform = z.enum(["IOS", "ANDROID", "UNKNOWN"]).nullable();

export type AudienceListServiceAppPlatform = z.infer<typeof AudienceListServiceAppPlatform>;
