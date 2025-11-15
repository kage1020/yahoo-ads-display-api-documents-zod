import { z } from 'zod';

import { feedFtp } from './FeedFtp';

export const feedFtpServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(feedFtp)
}).nullable();

export type FeedFtpServiceOperation = z.infer<typeof feedFtpServiceOperation>;
