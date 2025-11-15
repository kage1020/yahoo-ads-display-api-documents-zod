import { z } from 'zod';

import { feedSetServiceValue } from './FeedSetServiceValue';

export const feedSetServiceReturnValue = z.object({
  values: z.array(feedSetServiceValue).nullable()
}).nullable();

export type FeedSetServiceReturnValue = z.infer<typeof feedSetServiceReturnValue>;
