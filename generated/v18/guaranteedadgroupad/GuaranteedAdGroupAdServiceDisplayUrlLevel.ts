import { z } from 'zod';

export const guaranteedAdGroupAdServiceDisplayUrlLevel = z.enum(["DOMAIN", "FIRST_LEVEL", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupAdServiceDisplayUrlLevel = z.infer<typeof guaranteedAdGroupAdServiceDisplayUrlLevel>;
