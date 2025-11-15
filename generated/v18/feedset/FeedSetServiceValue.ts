import { z } from 'zod';

import { error } from '../../common/Error';
import { feedSet } from './FeedSet';

export const feedSetServiceValue = z.object({
  errors: z.array(error).nullable(),
  feedSet: feedSet,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type FeedSetServiceValue = z.infer<typeof feedSetServiceValue>;
