import { z } from 'zod';

import { feedDataServiceValue } from './FeedDataServiceValue';

export const feedDataServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(feedDataServiceValue).nullable()
}).nullable();

export type FeedDataServicePage = z.infer<typeof feedDataServicePage>;
