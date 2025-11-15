import { z } from 'zod';

export const MediaServiceFileType = z.enum(["JPEG", "GIF", "PNG", "UNKNOWN"]).nullable();

export type MediaServiceFileType = z.infer<typeof MediaServiceFileType>;
