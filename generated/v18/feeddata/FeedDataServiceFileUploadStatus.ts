import { z } from 'zod';

export const feedDataServiceFileUploadStatus = z.enum(["UPLOADED", "COMPLETED", "FILE_FORMAT_ERROR", "SYSTEM_ERROR", "NETWORK_ERROR", "FILE_NOT_FOUND_ERROR", "FILE_SIZE_OVER_ERROR", "AUTH_ERROR", "UPLOAD_COUNT_OVER_ERROR", "NOT_MODIFIED", "UNKNOWN"]).nullable();

export type FeedDataServiceFileUploadStatus = z.infer<typeof feedDataServiceFileUploadStatus>;
