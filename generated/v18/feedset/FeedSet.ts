import { z } from 'zod';

import { feedSetServiceConditionSet } from './FeedSetServiceConditionSet';

export const feedSet = z.object({
  accountId: z.number().int().nullable(),
  conditionSets: z.array(feedSetServiceConditionSet).nullable(),
  feedId: z.number().int().nullable(),
  feedSetId: z.number().int().nullable(),
  feedSetName: z.string().nullable(),
  isDefaultSet: z.boolean().nullable(),
  itemCount: z.number().int().nullable()
}).nullable();

export type FeedSet = z.infer<typeof feedSet>;
