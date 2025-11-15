import { z } from 'zod';

import { adGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const adGroupServiceCpvBiddingScheme = z.object({
  cpv: z.number().int().nullable(),
  isRemoveCpv: adGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceCpvBiddingScheme = z.infer<typeof adGroupServiceCpvBiddingScheme>;
