import { z } from 'zod';

import { feedSetServiceCompareOperator } from './FeedSetServiceCompareOperator';

export const feedSetServiceCondition = z.object({
  compareOperator: feedSetServiceCompareOperator,
  value: z.string().nullable()
}).nullable();

export type FeedSetServiceCondition = z.infer<typeof feedSetServiceCondition>;
