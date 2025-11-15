import { z } from 'zod';

export const statsServicePlacementCategoryType = z.enum(["PAGE", "STATION", "UNKNOWN"]).nullable();

export type StatsServicePlacementCategoryType = z.infer<typeof statsServicePlacementCategoryType>;
