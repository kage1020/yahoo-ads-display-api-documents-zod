import { z } from 'zod';

export const MediaServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type MediaServiceUserStatus = z.infer<typeof MediaServiceUserStatus>;
