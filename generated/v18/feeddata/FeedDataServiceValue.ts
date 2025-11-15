import { z } from 'zod';

import { Error } from './Error';
import { FeedDataServiceRecord } from './FeedDataServiceRecord';

export const FeedDataServiceValue = z.object({
  errors: z.array(Error).nullable(),
  feedData: FeedDataServiceRecord,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type FeedDataServiceValue = z.infer<typeof FeedDataServiceValue>;
