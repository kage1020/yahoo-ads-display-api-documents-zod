import { z } from 'zod';

export const adGroupTargetServicePlacementCategoryTarget = z.object({
  placementCategoryListName: z.string().nullable()
}).nullable();

export type AdGroupTargetServicePlacementCategoryTarget = z.infer<typeof adGroupTargetServicePlacementCategoryTarget>;
