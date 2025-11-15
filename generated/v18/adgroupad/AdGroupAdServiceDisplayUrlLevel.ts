import { z } from 'zod';

export const AdGroupAdServiceDisplayUrlLevel = z.enum(["DOMAIN", "FIRST_LEVEL", "UNKNOWN"]).nullable();

export type AdGroupAdServiceDisplayUrlLevel = z.infer<typeof AdGroupAdServiceDisplayUrlLevel>;
