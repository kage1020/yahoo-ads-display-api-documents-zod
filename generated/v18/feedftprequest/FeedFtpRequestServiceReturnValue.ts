import { z } from 'zod';

import { FeedFtpRequestServiceValue } from './FeedFtpRequestServiceValue';

export const FeedFtpRequestServiceReturnValue = z.object({
  values: z.array(FeedFtpRequestServiceValue).nullable()
}).nullable();

export type FeedFtpRequestServiceReturnValue = z.infer<typeof FeedFtpRequestServiceReturnValue>;
