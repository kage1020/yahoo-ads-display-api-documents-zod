import { z } from 'zod';

export const campaignServiceVcpmBiddingScheme = z.object({
  vcpm: z.number().int().nullable()
}).nullable();

export type CampaignServiceVcpmBiddingScheme = z.infer<typeof campaignServiceVcpmBiddingScheme>;
