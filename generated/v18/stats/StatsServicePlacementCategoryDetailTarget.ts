import { z } from 'zod';

import { statsServicePlacementCategoryType } from './StatsServicePlacementCategoryType';

export const statsServicePlacementCategoryDetailTarget = z.object({
  placementCategoryNameJa: z.string().nullable(),
  placementCategoryNameEn: z.string().nullable(),
  placementCategoryType: statsServicePlacementCategoryType
}).nullable();

export type StatsServicePlacementCategoryDetailTarget = z.infer<typeof statsServicePlacementCategoryDetailTarget>;
