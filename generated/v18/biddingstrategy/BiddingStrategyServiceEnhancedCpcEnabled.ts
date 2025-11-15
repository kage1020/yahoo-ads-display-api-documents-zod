import { z } from 'zod';

export const biddingStrategyServiceEnhancedCpcEnabled = z.enum(["TRUE", "UNKNOWN"]).nullable();

export type BiddingStrategyServiceEnhancedCpcEnabled = z.infer<typeof biddingStrategyServiceEnhancedCpcEnabled>;
