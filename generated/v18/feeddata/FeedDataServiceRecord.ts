import { z } from 'zod';

import { feedDataServiceFileUploadSource } from './FeedDataServiceFileUploadSource';
import { feedDataServiceFileUploadStatus } from './FeedDataServiceFileUploadStatus';
import { feedDataServiceItemListUploadType } from './FeedDataServiceItemListUploadType';

export const feedDataServiceRecord = z.object({
  accountId: z.number().int().nullable(),
  completeDate: z.string().nullable(),
  errorCount: z.number().int().nullable(),
  errorRate: z.number().nullable(),
  feedId: z.number().int().nullable(),
  fileUploadSource: feedDataServiceFileUploadSource,
  fileUploadStatus: feedDataServiceFileUploadStatus,
  isDebug: z.boolean().nullable(),
  itemListUploadId: z.number().int().nullable(),
  itemListUploadType: feedDataServiceItemListUploadType,
  uploadDate: z.string().nullable()
}).nullable();

export type FeedDataServiceRecord = z.infer<typeof feedDataServiceRecord>;
