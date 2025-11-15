import { z } from 'zod';

import { PlacementUrlListServiceValue } from './PlacementUrlListServiceValue';

export const PlacementUrlListServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(PlacementUrlListServiceValue).nullable()
}).nullable();

export type PlacementUrlListServicePage = z.infer<typeof PlacementUrlListServicePage>;
