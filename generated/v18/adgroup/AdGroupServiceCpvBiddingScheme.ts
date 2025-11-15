import { z } from 'zod';

import { AdGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const AdGroupServiceCpvBiddingScheme = z.object({
  cpv: z.number().int().nullable(),
  isRemoveCpv: AdGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceCpvBiddingScheme = z.infer<typeof AdGroupServiceCpvBiddingScheme>;
