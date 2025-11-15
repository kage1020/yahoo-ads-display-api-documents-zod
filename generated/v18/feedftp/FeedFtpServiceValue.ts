import { z } from 'zod';

import { Error } from './Error';
import { FeedFtp } from './FeedFtp';

export const FeedFtpServiceValue = z.object({
  errors: z.array(Error).nullable(),
  feedFtp: FeedFtp,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type FeedFtpServiceValue = z.infer<typeof FeedFtpServiceValue>;
