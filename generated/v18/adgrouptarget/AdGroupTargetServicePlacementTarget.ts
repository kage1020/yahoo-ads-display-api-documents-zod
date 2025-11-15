import { z } from 'zod';

import { adGroupTargetServicePlacementUrlListType } from './AdGroupTargetServicePlacementUrlListType';

export const adGroupTargetServicePlacementTarget = z.object({
  placementUrlListName: z.string().nullable(),
  placementUrlListType: adGroupTargetServicePlacementUrlListType
}).nullable();

export type AdGroupTargetServicePlacementTarget = z.infer<typeof adGroupTargetServicePlacementTarget>;
