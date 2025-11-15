import { z } from 'zod';

import { Error } from './Error';
import { FeedServicePage } from './FeedServicePage';

export const FeedServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: FeedServicePage
}).nullable();

export type FeedServiceGetResponse = z.infer<typeof FeedServiceGetResponse>;
