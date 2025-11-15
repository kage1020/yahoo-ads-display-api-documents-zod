import { z } from 'zod';

import { FeedDataServiceFileUploadSource } from './FeedDataServiceFileUploadSource';
import { FeedDataServiceFileUploadStatus } from './FeedDataServiceFileUploadStatus';
import { FeedDataServiceItemListUploadType } from './FeedDataServiceItemListUploadType';

export const FeedDataServiceRecord = z.object({
  accountId: z.number().int().nullable(),
  completeDate: z.string().nullable(),
  errorCount: z.number().int().nullable(),
  errorRate: z.number().nullable(),
  feedId: z.number().int().nullable(),
  fileUploadSource: FeedDataServiceFileUploadSource,
  fileUploadStatus: FeedDataServiceFileUploadStatus,
  isDebug: z.boolean().nullable(),
  itemListUploadId: z.number().int().nullable(),
  itemListUploadType: FeedDataServiceItemListUploadType,
  uploadDate: z.string().nullable()
}).nullable();

export type FeedDataServiceRecord = z.infer<typeof FeedDataServiceRecord>;
