import { z } from 'zod';

export const AudienceListServiceAppVendor = z.enum(["ADJUST", "APPSFLYER", "KOCHAVA", "SINGULAR", "UNKNOWN"]).nullable();

export type AudienceListServiceAppVendor = z.infer<typeof AudienceListServiceAppVendor>;
