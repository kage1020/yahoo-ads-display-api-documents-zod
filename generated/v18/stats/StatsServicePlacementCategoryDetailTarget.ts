import { z } from 'zod';

import { StatsServicePlacementCategoryType } from './StatsServicePlacementCategoryType';

export const StatsServicePlacementCategoryDetailTarget = z.object({
  placementCategoryNameJa: z.string().nullable(),
  placementCategoryNameEn: z.string().nullable(),
  placementCategoryType: StatsServicePlacementCategoryType
}).nullable();

export type StatsServicePlacementCategoryDetailTarget = z.infer<typeof StatsServicePlacementCategoryDetailTarget>;
