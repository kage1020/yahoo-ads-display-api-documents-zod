import { z } from 'zod';

export const GuaranteedAdGroupServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupServiceUserStatus = z.infer<typeof GuaranteedAdGroupServiceUserStatus>;
