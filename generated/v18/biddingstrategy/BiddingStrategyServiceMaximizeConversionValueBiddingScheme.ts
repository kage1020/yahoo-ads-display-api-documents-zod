import { z } from 'zod';

export const BiddingStrategyServiceMaximizeConversionValueBiddingScheme = z.object({
  targetRoas: z.number().nullable()
}).nullable();

export type BiddingStrategyServiceMaximizeConversionValueBiddingScheme = z.infer<typeof BiddingStrategyServiceMaximizeConversionValueBiddingScheme>;
