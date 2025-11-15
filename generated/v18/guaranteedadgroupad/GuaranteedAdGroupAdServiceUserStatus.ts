import { z } from 'zod';

export const guaranteedAdGroupAdServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupAdServiceUserStatus = z.infer<typeof guaranteedAdGroupAdServiceUserStatus>;
