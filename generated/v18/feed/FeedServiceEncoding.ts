import { z } from 'zod';

export const FeedServiceEncoding = z.enum(["UTF8", "UTF8_BOM", "SJIS", "UTF16LE", "UNKNOWN"]).nullable();

export type FeedServiceEncoding = z.infer<typeof FeedServiceEncoding>;
