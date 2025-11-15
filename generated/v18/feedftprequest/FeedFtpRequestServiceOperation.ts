import { z } from 'zod';

import { feedFtpRequest } from './FeedFtpRequest';

export const feedFtpRequestServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(feedFtpRequest)
}).nullable();

export type FeedFtpRequestServiceOperation = z.infer<typeof feedFtpRequestServiceOperation>;
