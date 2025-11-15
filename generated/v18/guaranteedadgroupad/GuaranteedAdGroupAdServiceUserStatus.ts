import { z } from 'zod';

export const GuaranteedAdGroupAdServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupAdServiceUserStatus = z.infer<typeof GuaranteedAdGroupAdServiceUserStatus>;
