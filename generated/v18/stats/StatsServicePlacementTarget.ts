import { z } from 'zod';

import { StatsServicePlacementUrlListType } from './StatsServicePlacementUrlListType';

export const StatsServicePlacementTarget = z.object({
  placementUrlListName: z.string().nullable(),
  placementUrlListType: StatsServicePlacementUrlListType
}).nullable();

export type StatsServicePlacementTarget = z.infer<typeof StatsServicePlacementTarget>;
