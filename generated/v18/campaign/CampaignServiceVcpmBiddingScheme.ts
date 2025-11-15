import { z } from 'zod';

export const CampaignServiceVcpmBiddingScheme = z.object({
  vcpm: z.number().int().nullable()
}).nullable();

export type CampaignServiceVcpmBiddingScheme = z.infer<typeof CampaignServiceVcpmBiddingScheme>;
