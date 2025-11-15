import { z } from 'zod';

export const StatsServicePlacementCategoryType = z.enum(["PAGE", "STATION", "UNKNOWN"]).nullable();

export type StatsServicePlacementCategoryType = z.infer<typeof StatsServicePlacementCategoryType>;
