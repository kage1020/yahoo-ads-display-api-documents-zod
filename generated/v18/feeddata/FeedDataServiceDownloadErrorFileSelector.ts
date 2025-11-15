import { z } from 'zod';

import { FeedDataServiceEncoding } from './FeedDataServiceEncoding';
import { FeedDataServiceOutput } from './FeedDataServiceOutput';

export const FeedDataServiceDownloadErrorFileSelector = z.object({
  accountId: z.number().int(),
  itemListUploadId: z.number().int(),
  encoding: FeedDataServiceEncoding,
  output: FeedDataServiceOutput
}).nullable();

export type FeedDataServiceDownloadErrorFileSelector = z.infer<typeof FeedDataServiceDownloadErrorFileSelector>;
