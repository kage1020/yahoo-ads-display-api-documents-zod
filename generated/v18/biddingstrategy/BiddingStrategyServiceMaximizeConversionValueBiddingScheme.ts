import { z } from 'zod';

export const biddingStrategyServiceMaximizeConversionValueBiddingScheme = z.object({
  targetRoas: z.number().nullable()
}).nullable();

export type BiddingStrategyServiceMaximizeConversionValueBiddingScheme = z.infer<typeof biddingStrategyServiceMaximizeConversionValueBiddingScheme>;
