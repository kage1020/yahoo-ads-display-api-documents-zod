import { z } from 'zod';

export const FeedDataServiceEncoding = z.enum(["UTF8", "UTF8_BOM", "SJIS", "UTF16LE", "UNKNOWN"]).nullable();

export type FeedDataServiceEncoding = z.infer<typeof FeedDataServiceEncoding>;
