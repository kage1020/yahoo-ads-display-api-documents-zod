import { z } from 'zod';

import { FeedSetServiceConditionType } from './FeedSetServiceConditionType';
import { FeedSetServiceCondition } from './FeedSetServiceCondition';

export const FeedSetServiceConditionSet = z.object({
  conditionType: FeedSetServiceConditionType,
  orConditions: z.array(FeedSetServiceCondition).nullable()
}).nullable();

export type FeedSetServiceConditionSet = z.infer<typeof FeedSetServiceConditionSet>;
