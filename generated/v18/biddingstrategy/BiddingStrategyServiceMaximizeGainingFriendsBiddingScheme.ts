import { z } from 'zod';

export const BiddingStrategyServiceMaximizeGainingFriendsBiddingScheme = z.object({
  targetCpf: z.number().int().nullable()
}).nullable();

export type BiddingStrategyServiceMaximizeGainingFriendsBiddingScheme = z.infer<typeof BiddingStrategyServiceMaximizeGainingFriendsBiddingScheme>;
