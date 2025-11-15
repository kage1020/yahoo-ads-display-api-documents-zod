import { z } from 'zod';

export const adGroupAdServiceDisplayUrlLevel = z.enum(["DOMAIN", "FIRST_LEVEL", "UNKNOWN"]).nullable();

export type AdGroupAdServiceDisplayUrlLevel = z.infer<typeof adGroupAdServiceDisplayUrlLevel>;
