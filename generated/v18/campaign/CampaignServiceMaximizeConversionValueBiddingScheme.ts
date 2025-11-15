import { z } from 'zod';

export const CampaignServiceMaximizeConversionValueBiddingScheme = z.object({
  targetRoas: z.number().nullable()
}).nullable();

export type CampaignServiceMaximizeConversionValueBiddingScheme = z.infer<typeof CampaignServiceMaximizeConversionValueBiddingScheme>;
