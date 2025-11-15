import { z } from 'zod';

import { AdGroupTargetServicePlacementCategoryType } from './AdGroupTargetServicePlacementCategoryType';

export const AdGroupTargetServicePlacementCategoryDetailTarget = z.object({
  placementCategoryNameJa: z.string().nullable(),
  placementCategoryNameEn: z.string().nullable(),
  placementCategoryType: AdGroupTargetServicePlacementCategoryType
}).nullable();

export type AdGroupTargetServicePlacementCategoryDetailTarget = z.infer<typeof AdGroupTargetServicePlacementCategoryDetailTarget>;
