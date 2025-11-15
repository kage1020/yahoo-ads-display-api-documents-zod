import { z } from 'zod';

export const mediaServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type MediaServiceUserStatus = z.infer<typeof mediaServiceUserStatus>;
