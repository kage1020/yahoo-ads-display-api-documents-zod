import { z } from 'zod';

import { AdGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const AdGroupServiceVcpmBiddingScheme = z.object({
  vcpm: z.number().int().nullable(),
  isRemoveVcpm: AdGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceVcpmBiddingScheme = z.infer<typeof AdGroupServiceVcpmBiddingScheme>;
