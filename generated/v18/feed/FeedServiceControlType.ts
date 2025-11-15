import { z } from 'zod';

export const feedServiceControlType = z.enum(["UPLOAD_COUNT_LIMIT", "FILE_ROWS_LIMIT", "FILE_SIZE_LIMIT_COMPRESS", "FILE_SIZE_LIMIT_UNCOMPRESS", "UNKNOWN"]).nullable();

export type FeedServiceControlType = z.infer<typeof feedServiceControlType>;
