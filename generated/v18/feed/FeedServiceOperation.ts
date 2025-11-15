import { z } from 'zod';

import { feed } from './Feed';

export const feedServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(feed)
}).nullable();

export type FeedServiceOperation = z.infer<typeof feedServiceOperation>;
