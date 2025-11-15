import { z } from 'zod';

export const guaranteedAdGroupServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupServiceUserStatus = z.infer<typeof guaranteedAdGroupServiceUserStatus>;
