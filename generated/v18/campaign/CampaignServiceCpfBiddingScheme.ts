import { z } from 'zod';

export const campaignServiceCpfBiddingScheme = z.object({
  cpf: z.number().int().nullable()
}).nullable();

export type CampaignServiceCpfBiddingScheme = z.infer<typeof campaignServiceCpfBiddingScheme>;
