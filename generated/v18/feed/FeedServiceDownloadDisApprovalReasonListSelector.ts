import { z } from 'zod';

import { FeedServiceEncoding } from './FeedServiceEncoding';

export const FeedServiceDownloadDisApprovalReasonListSelector = z.object({
  accountId: z.number().int(),
  feedId: z.number().int(),
  encoding: FeedServiceEncoding
}).nullable();

export type FeedServiceDownloadDisApprovalReasonListSelector = z.infer<typeof FeedServiceDownloadDisApprovalReasonListSelector>;
