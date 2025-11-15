import { z } from 'zod';

import { PlacementUrlIdeaServiceValue } from './PlacementUrlIdeaServiceValue';

export const PlacementUrlIdeaServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(PlacementUrlIdeaServiceValue).nullable()
}).nullable();

export type PlacementUrlIdeaServicePage = z.infer<typeof PlacementUrlIdeaServicePage>;
