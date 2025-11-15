import { z } from 'zod';

import { AdGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const AdGroupServiceCpfBiddingScheme = z.object({
  cpf: z.number().int().nullable(),
  isRemoveCpf: AdGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceCpfBiddingScheme = z.infer<typeof AdGroupServiceCpfBiddingScheme>;
