import { z } from 'zod';

import { feedSet } from './FeedSet';

export const feedSetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(feedSet)
}).nullable();

export type FeedSetServiceOperation = z.infer<typeof feedSetServiceOperation>;
