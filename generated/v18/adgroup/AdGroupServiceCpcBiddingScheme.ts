import { z } from 'zod';

import { AdGroupServiceEnhancedCpcEnabled } from './AdGroupServiceEnhancedCpcEnabled';
import { AdGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const AdGroupServiceCpcBiddingScheme = z.object({
  cpc: z.number().int().nullable(),
  enhancedCpcEnabled: AdGroupServiceEnhancedCpcEnabled,
  isRemoveCpc: AdGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceCpcBiddingScheme = z.infer<typeof AdGroupServiceCpcBiddingScheme>;
