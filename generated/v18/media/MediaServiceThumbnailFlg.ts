import { z } from 'zod';

export const MediaServiceThumbnailFlg = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type MediaServiceThumbnailFlg = z.infer<typeof MediaServiceThumbnailFlg>;
