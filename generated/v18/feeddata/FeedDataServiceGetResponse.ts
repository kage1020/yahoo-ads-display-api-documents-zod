import { z } from 'zod';

import { Error } from './Error';
import { FeedDataServicePage } from './FeedDataServicePage';

export const FeedDataServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: FeedDataServicePage
}).nullable();

export type FeedDataServiceGetResponse = z.infer<typeof FeedDataServiceGetResponse>;
