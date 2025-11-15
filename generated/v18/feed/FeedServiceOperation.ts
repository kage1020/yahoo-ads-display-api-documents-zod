import { z } from 'zod';

import { Feed } from './Feed';

export const FeedServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(Feed)
}).nullable();

export type FeedServiceOperation = z.infer<typeof FeedServiceOperation>;
