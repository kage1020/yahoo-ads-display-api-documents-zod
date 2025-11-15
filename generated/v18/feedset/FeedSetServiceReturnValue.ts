import { z } from 'zod';

import { FeedSetServiceValue } from './FeedSetServiceValue';

export const FeedSetServiceReturnValue = z.object({
  values: z.array(FeedSetServiceValue).nullable()
}).nullable();

export type FeedSetServiceReturnValue = z.infer<typeof FeedSetServiceReturnValue>;
