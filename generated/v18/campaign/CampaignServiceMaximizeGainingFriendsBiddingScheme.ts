import { z } from 'zod';

export const CampaignServiceMaximizeGainingFriendsBiddingScheme = z.object({
  targetCpf: z.number().int().nullable()
}).nullable();

export type CampaignServiceMaximizeGainingFriendsBiddingScheme = z.infer<typeof CampaignServiceMaximizeGainingFriendsBiddingScheme>;
