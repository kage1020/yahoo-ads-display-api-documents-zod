import { z } from 'zod';

import { adGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const adGroupServiceCpfBiddingScheme = z.object({
  cpf: z.number().int().nullable(),
  isRemoveCpf: adGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceCpfBiddingScheme = z.infer<typeof adGroupServiceCpfBiddingScheme>;
