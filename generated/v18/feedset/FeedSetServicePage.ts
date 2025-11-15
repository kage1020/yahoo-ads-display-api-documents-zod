import { z } from 'zod';

import { feedSetServiceValue } from './FeedSetServiceValue';

export const feedSetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(feedSetServiceValue).nullable()
}).nullable();

export type FeedSetServicePage = z.infer<typeof feedSetServicePage>;
