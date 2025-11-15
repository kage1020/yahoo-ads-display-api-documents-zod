import { z } from 'zod';

export const MediaServiceRichFormatFlg = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type MediaServiceRichFormatFlg = z.infer<typeof MediaServiceRichFormatFlg>;
