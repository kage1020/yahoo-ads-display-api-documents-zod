import { z } from 'zod';

import { Error } from './Error';
import { FeedFtpServicePage } from './FeedFtpServicePage';

export const FeedFtpServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: FeedFtpServicePage,
  timeTakenSeconds: z.number().nullable()
}).nullable();

export type FeedFtpServiceGetResponse = z.infer<typeof FeedFtpServiceGetResponse>;
