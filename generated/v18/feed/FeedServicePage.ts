import { z } from 'zod';

import { feedServiceValue } from './FeedServiceValue';

export const feedServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(feedServiceValue).nullable()
}).nullable();

export type FeedServicePage = z.infer<typeof feedServicePage>;
