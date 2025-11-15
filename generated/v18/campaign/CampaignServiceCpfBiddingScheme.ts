import { z } from 'zod';

export const CampaignServiceCpfBiddingScheme = z.object({
  cpf: z.number().int().nullable()
}).nullable();

export type CampaignServiceCpfBiddingScheme = z.infer<typeof CampaignServiceCpfBiddingScheme>;
