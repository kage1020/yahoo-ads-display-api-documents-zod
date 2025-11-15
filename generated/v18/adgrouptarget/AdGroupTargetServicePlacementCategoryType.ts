import { z } from 'zod';

export const AdGroupTargetServicePlacementCategoryType = z.enum(["PAGE", "STATION", "UNKNOWN"]).nullable();

export type AdGroupTargetServicePlacementCategoryType = z.infer<typeof AdGroupTargetServicePlacementCategoryType>;
