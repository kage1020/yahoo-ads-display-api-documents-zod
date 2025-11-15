import { z } from 'zod';

export const videoServiceProcessStatus = z.enum(["PROCESSING", "FINISHED", "FAILED", "UNKNOWN"]).nullable();

export type VideoServiceProcessStatus = z.infer<typeof videoServiceProcessStatus>;
