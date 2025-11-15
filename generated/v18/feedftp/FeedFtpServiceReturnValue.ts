import { z } from 'zod';

import { FeedFtpServiceValue } from './FeedFtpServiceValue';

export const FeedFtpServiceReturnValue = z.object({
  values: z.array(FeedFtpServiceValue).nullable()
}).nullable();

export type FeedFtpServiceReturnValue = z.infer<typeof FeedFtpServiceReturnValue>;
