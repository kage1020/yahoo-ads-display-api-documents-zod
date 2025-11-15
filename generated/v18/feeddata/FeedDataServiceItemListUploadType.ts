import { z } from 'zod';

export const FeedDataServiceItemListUploadType = z.enum(["UPDATE_PART", "UPDATE_ALL", "UNKNOWN"]).nullable();

export type FeedDataServiceItemListUploadType = z.infer<typeof FeedDataServiceItemListUploadType>;
