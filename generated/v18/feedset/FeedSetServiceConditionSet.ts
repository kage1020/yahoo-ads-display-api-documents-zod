import { z } from 'zod';

import { feedSetServiceConditionType } from './FeedSetServiceConditionType';
import { feedSetServiceCondition } from './FeedSetServiceCondition';

export const feedSetServiceConditionSet = z.object({
  conditionType: feedSetServiceConditionType,
  orConditions: z.array(feedSetServiceCondition).nullable()
}).nullable();

export type FeedSetServiceConditionSet = z.infer<typeof feedSetServiceConditionSet>;
