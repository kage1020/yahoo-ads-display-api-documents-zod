import { z } from 'zod';

import { placementUrlListServiceValue } from './PlacementUrlListServiceValue';

export const placementUrlListServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(placementUrlListServiceValue).nullable()
}).nullable();

export type PlacementUrlListServicePage = z.infer<typeof placementUrlListServicePage>;
