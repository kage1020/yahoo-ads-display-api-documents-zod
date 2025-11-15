import { z } from 'zod';

import { FeedFtp } from './FeedFtp';

export const FeedFtpServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(FeedFtp)
}).nullable();

export type FeedFtpServiceOperation = z.infer<typeof FeedFtpServiceOperation>;
