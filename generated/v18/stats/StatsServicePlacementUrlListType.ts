import { z } from 'zod';

export const StatsServicePlacementUrlListType = z.enum(["WHITE_LIST", "BLACK_LIST", "UNKNOWN"]).nullable();

export type StatsServicePlacementUrlListType = z.infer<typeof StatsServicePlacementUrlListType>;
