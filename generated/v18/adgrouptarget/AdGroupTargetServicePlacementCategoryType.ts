import { z } from 'zod';

export const adGroupTargetServicePlacementCategoryType = z.enum(["PAGE", "STATION", "UNKNOWN"]).nullable();

export type AdGroupTargetServicePlacementCategoryType = z.infer<typeof adGroupTargetServicePlacementCategoryType>;
