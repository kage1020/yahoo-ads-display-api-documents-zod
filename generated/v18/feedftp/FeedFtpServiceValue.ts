import { z } from 'zod';

import { error } from '../../common/Error';
import { feedFtp } from './FeedFtp';

export const feedFtpServiceValue = z.object({
  errors: z.array(error).nullable(),
  feedFtp: feedFtp,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type FeedFtpServiceValue = z.infer<typeof feedFtpServiceValue>;
