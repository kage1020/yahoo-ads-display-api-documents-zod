import { z } from 'zod';

import { feedFtpRequestServiceValue } from './FeedFtpRequestServiceValue';

export const feedFtpRequestServiceReturnValue = z.object({
  values: z.array(feedFtpRequestServiceValue).nullable()
}).nullable();

export type FeedFtpRequestServiceReturnValue = z.infer<typeof feedFtpRequestServiceReturnValue>;
