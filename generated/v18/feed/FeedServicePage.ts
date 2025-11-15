import { z } from 'zod';

import { FeedServiceValue } from './FeedServiceValue';

export const FeedServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(FeedServiceValue).nullable()
}).nullable();

export type FeedServicePage = z.infer<typeof FeedServicePage>;
