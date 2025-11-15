import { z } from 'zod';

import { Error } from './Error';
import { FeedFtpRequest } from './FeedFtpRequest';

export const FeedFtpRequestServiceValue = z.object({
  errors: z.array(Error).nullable(),
  feedFtpRequest: FeedFtpRequest,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type FeedFtpRequestServiceValue = z.infer<typeof FeedFtpRequestServiceValue>;
