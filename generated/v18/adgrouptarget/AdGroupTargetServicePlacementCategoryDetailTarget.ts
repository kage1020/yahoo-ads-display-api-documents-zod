import { z } from 'zod';

import { adGroupTargetServicePlacementCategoryType } from './AdGroupTargetServicePlacementCategoryType';

export const adGroupTargetServicePlacementCategoryDetailTarget = z.object({
  placementCategoryNameJa: z.string().nullable(),
  placementCategoryNameEn: z.string().nullable(),
  placementCategoryType: adGroupTargetServicePlacementCategoryType
}).nullable();

export type AdGroupTargetServicePlacementCategoryDetailTarget = z.infer<typeof adGroupTargetServicePlacementCategoryDetailTarget>;
