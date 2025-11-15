import { z } from 'zod';

import { feedDataServiceEncoding } from './FeedDataServiceEncoding';
import { feedDataServiceOutput } from './FeedDataServiceOutput';

export const feedDataServiceDownloadErrorFileSelector = z.object({
  accountId: z.number().int(),
  itemListUploadId: z.number().int(),
  encoding: feedDataServiceEncoding,
  output: feedDataServiceOutput
}).nullable();

export type FeedDataServiceDownloadErrorFileSelector = z.infer<typeof feedDataServiceDownloadErrorFileSelector>;
