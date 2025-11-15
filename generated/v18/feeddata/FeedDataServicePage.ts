import { z } from 'zod';

import { FeedDataServiceValue } from './FeedDataServiceValue';

export const FeedDataServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(FeedDataServiceValue).nullable()
}).nullable();

export type FeedDataServicePage = z.infer<typeof FeedDataServicePage>;
