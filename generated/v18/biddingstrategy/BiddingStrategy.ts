import { z } from 'zod';

import { BiddingStrategyServiceBudget } from './BiddingStrategyServiceBudget';
import { BiddingStrategyServiceBiddingScheme } from './BiddingStrategyServiceBiddingScheme';
import { BiddingStrategyServiceBiddingOption } from './BiddingStrategyServiceBiddingOption';

export const BiddingStrategy = z.object({
  accountId: z.number().int().nullable(),
  portfolioBiddingId: z.number().int().nullable(),
  portfolioBiddingName: z.string().nullable(),
  budget: BiddingStrategyServiceBudget,
  biddingScheme: BiddingStrategyServiceBiddingScheme,
  biddingOption: BiddingStrategyServiceBiddingOption
}).nullable();

export type BiddingStrategy = z.infer<typeof BiddingStrategy>;
