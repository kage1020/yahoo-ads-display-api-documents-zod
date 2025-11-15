import { z } from 'zod';

import { campaignServiceBiddingScheme } from './CampaignServiceBiddingScheme';

export const campaignServiceBiddingStrategyConfiguration = z.object({
  biddingScheme: campaignServiceBiddingScheme,
  portfolioBiddingId: z.number().int().nullable(),
  portfolioBiddingName: z.string().nullable()
}).nullable();

export type CampaignServiceBiddingStrategyConfiguration = z.infer<typeof campaignServiceBiddingStrategyConfiguration>;
