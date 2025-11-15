import { z } from 'zod';

export const BiddingStrategyServiceEnhancedCpcEnabled = z.enum(["TRUE", "UNKNOWN"]).nullable();

export type BiddingStrategyServiceEnhancedCpcEnabled = z.infer<typeof BiddingStrategyServiceEnhancedCpcEnabled>;
