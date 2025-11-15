import { z } from 'zod';

import { Error } from './Error';
import { PlacementUrlIdea } from './PlacementUrlIdea';

export const PlacementUrlIdeaServiceValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  placementUrlIdea: PlacementUrlIdea
}).nullable();

export type PlacementUrlIdeaServiceValue = z.infer<typeof PlacementUrlIdeaServiceValue>;
