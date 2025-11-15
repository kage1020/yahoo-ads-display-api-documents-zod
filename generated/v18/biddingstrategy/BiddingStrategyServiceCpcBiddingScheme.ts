import { z } from 'zod';

import { biddingStrategyServiceEnhancedCpcEnabled } from './BiddingStrategyServiceEnhancedCpcEnabled';

export const biddingStrategyServiceCpcBiddingScheme = z.object({
  cpc: z.number().int().nullable(),
  enhancedCpcEnabled: biddingStrategyServiceEnhancedCpcEnabled
}).nullable();

export type BiddingStrategyServiceCpcBiddingScheme = z.infer<typeof biddingStrategyServiceCpcBiddingScheme>;
