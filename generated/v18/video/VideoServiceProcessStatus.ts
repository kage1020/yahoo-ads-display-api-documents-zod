import { z } from 'zod';

export const VideoServiceProcessStatus = z.enum(["PROCESSING", "FINISHED", "FAILED", "UNKNOWN"]).nullable();

export type VideoServiceProcessStatus = z.infer<typeof VideoServiceProcessStatus>;
