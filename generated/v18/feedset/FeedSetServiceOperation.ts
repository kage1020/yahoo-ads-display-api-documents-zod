import { z } from 'zod';

import { FeedSet } from './FeedSet';

export const FeedSetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(FeedSet)
}).nullable();

export type FeedSetServiceOperation = z.infer<typeof FeedSetServiceOperation>;
