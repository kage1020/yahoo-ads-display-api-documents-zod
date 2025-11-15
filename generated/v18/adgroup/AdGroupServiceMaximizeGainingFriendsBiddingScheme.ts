import { z } from 'zod';

import { AdGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const AdGroupServiceMaximizeGainingFriendsBiddingScheme = z.object({
  targetCpf: z.number().int().nullable(),
  isRemoveTargetCpf: AdGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceMaximizeGainingFriendsBiddingScheme = z.infer<typeof AdGroupServiceMaximizeGainingFriendsBiddingScheme>;
