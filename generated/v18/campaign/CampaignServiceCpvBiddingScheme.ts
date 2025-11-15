import { z } from 'zod';

export const campaignServiceCpvBiddingScheme = z.object({
  cpv: z.number().int().nullable()
}).nullable();

export type CampaignServiceCpvBiddingScheme = z.infer<typeof campaignServiceCpvBiddingScheme>;
