import { z } from 'zod';

export const statsServicePlacementUrlListType = z.enum(["WHITE_LIST", "BLACK_LIST", "UNKNOWN"]).nullable();

export type StatsServicePlacementUrlListType = z.infer<typeof statsServicePlacementUrlListType>;
