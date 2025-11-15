import { z } from 'zod';

import { feedDataServiceFileUploadDateRange } from './FeedDataServiceFileUploadDateRange';
import { feedDataServiceFileUploadStatus } from './FeedDataServiceFileUploadStatus';

export const feedDataServiceSelector = z.object({
  accountId: z.number().int(),
  feedIds: z.array(z.number().int().nullable()).nullable(),
  fileUploadDateRange: feedDataServiceFileUploadDateRange,
  itemListUploadIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  uploadStatuses: z.array(feedDataServiceFileUploadStatus).nullable()
}).nullable();

export type FeedDataServiceSelector = z.infer<typeof feedDataServiceSelector>;
