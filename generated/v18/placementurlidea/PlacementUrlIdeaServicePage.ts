import { z } from 'zod';

import { placementUrlIdeaServiceValue } from './PlacementUrlIdeaServiceValue';

export const placementUrlIdeaServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(placementUrlIdeaServiceValue).nullable()
}).nullable();

export type PlacementUrlIdeaServicePage = z.infer<typeof placementUrlIdeaServicePage>;
