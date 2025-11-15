import { z } from 'zod';

export const FeedFtpServiceItemListUploadType = z.enum(["UPDATE_PART", "UPDATE_ALL", "UNKNOWN"]).nullable();

export type FeedFtpServiceItemListUploadType = z.infer<typeof FeedFtpServiceItemListUploadType>;
