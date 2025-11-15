import { z } from 'zod';

import { CampaignServiceBiddingScheme } from './CampaignServiceBiddingScheme';

export const CampaignServiceBiddingStrategyConfiguration = z.object({
  biddingScheme: CampaignServiceBiddingScheme,
  portfolioBiddingId: z.number().int().nullable(),
  portfolioBiddingName: z.string().nullable()
}).nullable();

export type CampaignServiceBiddingStrategyConfiguration = z.infer<typeof CampaignServiceBiddingStrategyConfiguration>;
