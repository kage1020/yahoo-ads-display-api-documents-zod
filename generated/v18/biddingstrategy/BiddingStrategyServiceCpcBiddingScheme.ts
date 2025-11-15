import { z } from 'zod';

import { BiddingStrategyServiceEnhancedCpcEnabled } from './BiddingStrategyServiceEnhancedCpcEnabled';

export const BiddingStrategyServiceCpcBiddingScheme = z.object({
  cpc: z.number().int().nullable(),
  enhancedCpcEnabled: BiddingStrategyServiceEnhancedCpcEnabled
}).nullable();

export type BiddingStrategyServiceCpcBiddingScheme = z.infer<typeof BiddingStrategyServiceCpcBiddingScheme>;
