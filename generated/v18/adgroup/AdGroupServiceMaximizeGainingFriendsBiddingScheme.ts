import { z } from 'zod';

import { adGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const adGroupServiceMaximizeGainingFriendsBiddingScheme = z.object({
  targetCpf: z.number().int().nullable(),
  isRemoveTargetCpf: adGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceMaximizeGainingFriendsBiddingScheme = z.infer<typeof adGroupServiceMaximizeGainingFriendsBiddingScheme>;
