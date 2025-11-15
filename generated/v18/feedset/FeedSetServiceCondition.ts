import { z } from 'zod';

import { FeedSetServiceCompareOperator } from './FeedSetServiceCompareOperator';

export const FeedSetServiceCondition = z.object({
  compareOperator: FeedSetServiceCompareOperator,
  value: z.string().nullable()
}).nullable();

export type FeedSetServiceCondition = z.infer<typeof FeedSetServiceCondition>;
