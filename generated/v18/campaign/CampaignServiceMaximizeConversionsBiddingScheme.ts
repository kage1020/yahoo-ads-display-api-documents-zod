import { z } from 'zod';

import { campaignServiceSkanTcpaTargetType } from './CampaignServiceSkanTcpaTargetType';

export const campaignServiceMaximizeConversionsBiddingScheme = z.object({
  targetCpa: z.number().int().nullable(),
  skanTcpaTargetType: campaignServiceSkanTcpaTargetType
}).nullable();

export type CampaignServiceMaximizeConversionsBiddingScheme = z.infer<typeof campaignServiceMaximizeConversionsBiddingScheme>;
