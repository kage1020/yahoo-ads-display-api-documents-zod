import { z } from 'zod';

import { adGroupServiceEnhancedCpcEnabled } from './AdGroupServiceEnhancedCpcEnabled';
import { adGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const adGroupServiceCpcBiddingScheme = z.object({
  cpc: z.number().int().nullable(),
  enhancedCpcEnabled: adGroupServiceEnhancedCpcEnabled,
  isRemoveCpc: adGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceCpcBiddingScheme = z.infer<typeof adGroupServiceCpcBiddingScheme>;
