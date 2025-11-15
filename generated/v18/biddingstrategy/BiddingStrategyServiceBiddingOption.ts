import { z } from 'zod';

export const biddingStrategyServiceBiddingOption = z.enum(["VCPM", "CPC", "CPV", "UNKNOWN"]).nullable();

export type BiddingStrategyServiceBiddingOption = z.infer<typeof biddingStrategyServiceBiddingOption>;
