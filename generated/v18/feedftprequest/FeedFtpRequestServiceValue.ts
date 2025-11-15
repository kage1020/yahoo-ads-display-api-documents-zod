import { z } from 'zod';

import { error } from '../../common/Error';
import { feedFtpRequest } from './FeedFtpRequest';

export const feedFtpRequestServiceValue = z.object({
  errors: z.array(error).nullable(),
  feedFtpRequest: feedFtpRequest,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type FeedFtpRequestServiceValue = z.infer<typeof feedFtpRequestServiceValue>;
