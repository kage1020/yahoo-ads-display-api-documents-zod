import { z } from 'zod';

export const videoServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type VideoServiceUserStatus = z.infer<typeof videoServiceUserStatus>;
