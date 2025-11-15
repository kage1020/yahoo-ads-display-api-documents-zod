import { z } from 'zod';

export const VideoServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type VideoServiceUserStatus = z.infer<typeof VideoServiceUserStatus>;
