import { z } from 'zod';

import { feedFtpServiceValue } from './FeedFtpServiceValue';

export const feedFtpServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(feedFtpServiceValue).nullable()
}).nullable();

export type FeedFtpServicePage = z.infer<typeof feedFtpServicePage>;
