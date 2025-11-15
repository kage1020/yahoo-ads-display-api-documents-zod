import { z } from 'zod';

import { FeedFtpServiceValue } from './FeedFtpServiceValue';

export const FeedFtpServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(FeedFtpServiceValue).nullable()
}).nullable();

export type FeedFtpServicePage = z.infer<typeof FeedFtpServicePage>;
