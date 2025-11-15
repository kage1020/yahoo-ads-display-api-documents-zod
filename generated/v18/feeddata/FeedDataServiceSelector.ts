import { z } from 'zod';

import { FeedDataServiceFileUploadDateRange } from './FeedDataServiceFileUploadDateRange';
import { FeedDataServiceFileUploadStatus } from './FeedDataServiceFileUploadStatus';

export const FeedDataServiceSelector = z.object({
  accountId: z.number().int(),
  feedIds: z.array(z.number().int().nullable()).nullable(),
  fileUploadDateRange: FeedDataServiceFileUploadDateRange,
  itemListUploadIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  uploadStatuses: z.array(FeedDataServiceFileUploadStatus).nullable()
}).nullable();

export type FeedDataServiceSelector = z.infer<typeof FeedDataServiceSelector>;
