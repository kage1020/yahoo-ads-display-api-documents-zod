import { z } from 'zod';

export const VideoServiceFileType = z.enum(["MP4", "UNKNOWN"]).nullable();

export type VideoServiceFileType = z.infer<typeof VideoServiceFileType>;
