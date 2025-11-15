import { z } from 'zod';

export const feedServiceEncoding = z.enum(["UTF8", "UTF8_BOM", "SJIS", "UTF16LE", "UNKNOWN"]).nullable();

export type FeedServiceEncoding = z.infer<typeof feedServiceEncoding>;
