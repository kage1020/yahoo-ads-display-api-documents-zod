import { z } from 'zod';

import { feedServiceEncoding } from './FeedServiceEncoding';

export const feedServiceDownloadDisApprovalReasonListSelector = z.object({
  accountId: z.number().int(),
  feedId: z.number().int(),
  encoding: feedServiceEncoding
}).nullable();

export type FeedServiceDownloadDisApprovalReasonListSelector = z.infer<typeof feedServiceDownloadDisApprovalReasonListSelector>;
