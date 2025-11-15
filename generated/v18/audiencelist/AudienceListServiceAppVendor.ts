import { z } from 'zod';

export const audienceListServiceAppVendor = z.enum(["ADJUST", "APPSFLYER", "KOCHAVA", "SINGULAR", "UNKNOWN"]).nullable();

export type AudienceListServiceAppVendor = z.infer<typeof audienceListServiceAppVendor>;
