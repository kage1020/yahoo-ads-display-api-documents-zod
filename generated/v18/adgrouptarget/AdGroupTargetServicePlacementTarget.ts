import { z } from 'zod';

import { AdGroupTargetServicePlacementUrlListType } from './AdGroupTargetServicePlacementUrlListType';

export const AdGroupTargetServicePlacementTarget = z.object({
  placementUrlListName: z.string().nullable(),
  placementUrlListType: AdGroupTargetServicePlacementUrlListType
}).nullable();

export type AdGroupTargetServicePlacementTarget = z.infer<typeof AdGroupTargetServicePlacementTarget>;
