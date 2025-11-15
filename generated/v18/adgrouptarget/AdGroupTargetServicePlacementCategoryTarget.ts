import { z } from 'zod';

export const AdGroupTargetServicePlacementCategoryTarget = z.object({
  placementCategoryListName: z.string().nullable()
}).nullable();

export type AdGroupTargetServicePlacementCategoryTarget = z.infer<typeof AdGroupTargetServicePlacementCategoryTarget>;
