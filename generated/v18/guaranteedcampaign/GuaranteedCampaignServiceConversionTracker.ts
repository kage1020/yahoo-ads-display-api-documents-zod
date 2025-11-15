import { z } from 'zod';

import { guaranteedCampaignServiceIsRemoveFlg } from './GuaranteedCampaignServiceIsRemoveFlg';

export const guaranteedCampaignServiceConversionTracker = z.object({
  conversionGroupId: z.number().int().nullable(),
  conversionTrackerId: z.number().int().nullable(),
  isRemoveConversionGroupId: guaranteedCampaignServiceIsRemoveFlg,
  isRemoveConversionTrackerId: guaranteedCampaignServiceIsRemoveFlg
}).nullable();

export type GuaranteedCampaignServiceConversionTracker = z.infer<typeof guaranteedCampaignServiceConversionTracker>;
