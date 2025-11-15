import { z } from 'zod';

export const biddingStrategyServiceMaximizeGainingFriendsBiddingScheme = z.object({
  targetCpf: z.number().int().nullable()
}).nullable();

export type BiddingStrategyServiceMaximizeGainingFriendsBiddingScheme = z.infer<typeof biddingStrategyServiceMaximizeGainingFriendsBiddingScheme>;
