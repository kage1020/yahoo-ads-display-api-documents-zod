import { z } from 'zod';

import { campaignServiceEnhancedCpcEnabled } from './CampaignServiceEnhancedCpcEnabled';

export const campaignServiceCpcBiddingScheme = z.object({
  cpc: z.number().int().nullable(),
  enhancedCpcEnabled: campaignServiceEnhancedCpcEnabled
}).nullable();

export type CampaignServiceCpcBiddingScheme = z.infer<typeof campaignServiceCpcBiddingScheme>;
