import { z } from 'zod';

export const GuaranteedAdGroupAdServiceDisplayUrlLevel = z.enum(["DOMAIN", "FIRST_LEVEL", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupAdServiceDisplayUrlLevel = z.infer<typeof GuaranteedAdGroupAdServiceDisplayUrlLevel>;
