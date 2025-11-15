import { z } from 'zod';

import { Error } from './Error';
import { FeedSetServicePage } from './FeedSetServicePage';

export const FeedSetServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: FeedSetServicePage,
  timeTakenSeconds: z.number().nullable()
}).nullable();

export type FeedSetServiceGetResponse = z.infer<typeof FeedSetServiceGetResponse>;
