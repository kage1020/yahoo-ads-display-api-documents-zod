import { z } from 'zod';

import { campaignServiceIsRemoveFlg } from './CampaignServiceIsRemoveFlg';

export const campaignServiceConversionTracker = z.object({
  conversionGroupId: z.number().int().nullable(),
  conversionTrackerId: z.number().int().nullable(),
  isRemoveConversionGroupId: campaignServiceIsRemoveFlg,
  isRemoveConversionTrackerId: campaignServiceIsRemoveFlg
}).nullable();

export type CampaignServiceConversionTracker = z.infer<typeof campaignServiceConversionTracker>;
