import { z } from 'zod';

import { GuaranteedCampaignServiceIsRemoveFlg } from './GuaranteedCampaignServiceIsRemoveFlg';

export const GuaranteedCampaignServiceConversionTracker = z.object({
  conversionGroupId: z.number().int().nullable(),
  conversionTrackerId: z.number().int().nullable(),
  isRemoveConversionGroupId: GuaranteedCampaignServiceIsRemoveFlg,
  isRemoveConversionTrackerId: GuaranteedCampaignServiceIsRemoveFlg
}).nullable();

export type GuaranteedCampaignServiceConversionTracker = z.infer<typeof GuaranteedCampaignServiceConversionTracker>;
