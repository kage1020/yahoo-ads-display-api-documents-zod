import { z } from 'zod';

import { FeedFtpRequest } from './FeedFtpRequest';

export const FeedFtpRequestServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(FeedFtpRequest)
}).nullable();

export type FeedFtpRequestServiceOperation = z.infer<typeof FeedFtpRequestServiceOperation>;
