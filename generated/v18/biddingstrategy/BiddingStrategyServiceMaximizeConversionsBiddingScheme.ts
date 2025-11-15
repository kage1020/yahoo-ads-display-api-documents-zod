import { z } from 'zod';

export const biddingStrategyServiceMaximizeConversionsBiddingScheme = z.object({
  targetCpa: z.number().int().nullable()
}).nullable();

export type BiddingStrategyServiceMaximizeConversionsBiddingScheme = z.infer<typeof biddingStrategyServiceMaximizeConversionsBiddingScheme>;
