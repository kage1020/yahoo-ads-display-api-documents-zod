import { z } from 'zod';

import { feedServiceValue } from './FeedServiceValue';

export const feedServiceReturnValue = z.object({
  values: z.array(feedServiceValue).nullable()
}).nullable();

export type FeedServiceReturnValue = z.infer<typeof feedServiceReturnValue>;
