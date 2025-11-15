import { z } from 'zod';

export const CampaignServiceCpvBiddingScheme = z.object({
  cpv: z.number().int().nullable()
}).nullable();

export type CampaignServiceCpvBiddingScheme = z.infer<typeof CampaignServiceCpvBiddingScheme>;
