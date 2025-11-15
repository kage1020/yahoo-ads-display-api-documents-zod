import { z } from 'zod';

export const audienceListServiceAppPlatform = z.enum(["IOS", "ANDROID", "UNKNOWN"]).nullable();

export type AudienceListServiceAppPlatform = z.infer<typeof audienceListServiceAppPlatform>;
