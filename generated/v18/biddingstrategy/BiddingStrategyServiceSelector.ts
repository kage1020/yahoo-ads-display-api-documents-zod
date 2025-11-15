import { z } from 'zod';

import { biddingStrategyServiceType } from './BiddingStrategyServiceType';

export const biddingStrategyServiceSelector = z.object({
  accountId: z.number().int(),
  portfolioBiddingIds: z.array(z.number().int().nullable()).nullable(),
  campaignBudgetIds: z.array(z.number().int().nullable()).nullable(),
  biddingStrategyTypes: z.array(biddingStrategyServiceType).nullable(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type BiddingStrategyServiceSelector = z.infer<typeof biddingStrategyServiceSelector>;
