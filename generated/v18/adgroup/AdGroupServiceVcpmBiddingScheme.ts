import { z } from 'zod';

import { adGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const adGroupServiceVcpmBiddingScheme = z.object({
  vcpm: z.number().int().nullable(),
  isRemoveVcpm: adGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceVcpmBiddingScheme = z.infer<typeof adGroupServiceVcpmBiddingScheme>;
