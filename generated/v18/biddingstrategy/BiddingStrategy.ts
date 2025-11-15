import { z } from 'zod';

import { biddingStrategyServiceBudget } from './BiddingStrategyServiceBudget';
import { biddingStrategyServiceBiddingScheme } from './BiddingStrategyServiceBiddingScheme';
import { biddingStrategyServiceBiddingOption } from './BiddingStrategyServiceBiddingOption';

export const biddingStrategy = z.object({
  accountId: z.number().int().nullable(),
  portfolioBiddingId: z.number().int().nullable(),
  portfolioBiddingName: z.string().nullable(),
  budget: biddingStrategyServiceBudget,
  biddingScheme: biddingStrategyServiceBiddingScheme,
  biddingOption: biddingStrategyServiceBiddingOption
}).nullable();

export type BiddingStrategy = z.infer<typeof biddingStrategy>;
