import { z } from 'zod';

export const mediaServiceThumbnailFlg = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type MediaServiceThumbnailFlg = z.infer<typeof mediaServiceThumbnailFlg>;
