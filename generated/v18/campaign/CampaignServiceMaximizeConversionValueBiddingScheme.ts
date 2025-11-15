import { z } from 'zod';

export const campaignServiceMaximizeConversionValueBiddingScheme = z.object({
  targetRoas: z.number().nullable()
}).nullable();

export type CampaignServiceMaximizeConversionValueBiddingScheme = z.infer<typeof campaignServiceMaximizeConversionValueBiddingScheme>;
