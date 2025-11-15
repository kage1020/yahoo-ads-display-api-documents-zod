import { z } from 'zod';

import { CampaignServiceIsRemoveFlg } from './CampaignServiceIsRemoveFlg';

export const CampaignServiceConversionTracker = z.object({
  conversionGroupId: z.number().int().nullable(),
  conversionTrackerId: z.number().int().nullable(),
  isRemoveConversionGroupId: CampaignServiceIsRemoveFlg,
  isRemoveConversionTrackerId: CampaignServiceIsRemoveFlg
}).nullable();

export type CampaignServiceConversionTracker = z.infer<typeof CampaignServiceConversionTracker>;
