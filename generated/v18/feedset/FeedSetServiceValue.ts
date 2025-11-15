import { z } from 'zod';

import { Error } from './Error';
import { FeedSet } from './FeedSet';

export const FeedSetServiceValue = z.object({
  errors: z.array(Error).nullable(),
  feedSet: FeedSet,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type FeedSetServiceValue = z.infer<typeof FeedSetServiceValue>;
