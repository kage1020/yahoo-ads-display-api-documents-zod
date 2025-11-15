import { z } from 'zod';

import { CampaignServiceEnhancedCpcEnabled } from './CampaignServiceEnhancedCpcEnabled';

export const CampaignServiceCpcBiddingScheme = z.object({
  cpc: z.number().int().nullable(),
  enhancedCpcEnabled: CampaignServiceEnhancedCpcEnabled
}).nullable();

export type CampaignServiceCpcBiddingScheme = z.infer<typeof CampaignServiceCpcBiddingScheme>;
