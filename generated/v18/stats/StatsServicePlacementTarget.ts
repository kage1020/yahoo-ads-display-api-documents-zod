import { z } from 'zod';

import { statsServicePlacementUrlListType } from './StatsServicePlacementUrlListType';

export const statsServicePlacementTarget = z.object({
  placementUrlListName: z.string().nullable(),
  placementUrlListType: statsServicePlacementUrlListType
}).nullable();

export type StatsServicePlacementTarget = z.infer<typeof statsServicePlacementTarget>;
