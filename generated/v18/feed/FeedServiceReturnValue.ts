import { z } from 'zod';

import { FeedServiceValue } from './FeedServiceValue';

export const FeedServiceReturnValue = z.object({
  values: z.array(FeedServiceValue).nullable()
}).nullable();

export type FeedServiceReturnValue = z.infer<typeof FeedServiceReturnValue>;
