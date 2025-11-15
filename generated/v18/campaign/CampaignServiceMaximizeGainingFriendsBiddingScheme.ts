import { z } from 'zod';

export const campaignServiceMaximizeGainingFriendsBiddingScheme = z.object({
  targetCpf: z.number().int().nullable()
}).nullable();

export type CampaignServiceMaximizeGainingFriendsBiddingScheme = z.infer<typeof campaignServiceMaximizeGainingFriendsBiddingScheme>;
