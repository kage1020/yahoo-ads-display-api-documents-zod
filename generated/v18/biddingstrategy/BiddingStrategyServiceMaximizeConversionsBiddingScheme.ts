import { z } from 'zod';

export const BiddingStrategyServiceMaximizeConversionsBiddingScheme = z.object({
  targetCpa: z.number().int().nullable()
}).nullable();

export type BiddingStrategyServiceMaximizeConversionsBiddingScheme = z.infer<typeof BiddingStrategyServiceMaximizeConversionsBiddingScheme>;
