import { z } from 'zod';

export const mediaServiceFileType = z.enum(["JPEG", "GIF", "PNG", "UNKNOWN"]).nullable();

export type MediaServiceFileType = z.infer<typeof mediaServiceFileType>;
