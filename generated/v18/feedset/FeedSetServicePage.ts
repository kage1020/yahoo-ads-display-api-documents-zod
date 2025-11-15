import { z } from 'zod';

import { FeedSetServiceValue } from './FeedSetServiceValue';

export const FeedSetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(FeedSetServiceValue).nullable()
}).nullable();

export type FeedSetServicePage = z.infer<typeof FeedSetServicePage>;
