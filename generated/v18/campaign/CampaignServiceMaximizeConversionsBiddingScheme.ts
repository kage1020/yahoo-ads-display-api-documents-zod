import { z } from 'zod';

import { CampaignServiceSkanTcpaTargetType } from './CampaignServiceSkanTcpaTargetType';

export const CampaignServiceMaximizeConversionsBiddingScheme = z.object({
  targetCpa: z.number().int().nullable(),
  skanTcpaTargetType: CampaignServiceSkanTcpaTargetType
}).nullable();

export type CampaignServiceMaximizeConversionsBiddingScheme = z.infer<typeof CampaignServiceMaximizeConversionsBiddingScheme>;
