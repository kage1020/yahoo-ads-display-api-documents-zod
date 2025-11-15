import { z } from 'zod';

export const videoServiceFileType = z.enum(["MP4", "UNKNOWN"]).nullable();

export type VideoServiceFileType = z.infer<typeof videoServiceFileType>;
