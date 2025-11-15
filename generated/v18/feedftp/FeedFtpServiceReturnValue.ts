import { z } from 'zod';

import { feedFtpServiceValue } from './FeedFtpServiceValue';

export const feedFtpServiceReturnValue = z.object({
  values: z.array(feedFtpServiceValue).nullable()
}).nullable();

export type FeedFtpServiceReturnValue = z.infer<typeof feedFtpServiceReturnValue>;
