import { z } from 'zod';

import { error } from '../../common/Error';
import { placementUrlIdea } from './PlacementUrlIdea';

export const placementUrlIdeaServiceValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  placementUrlIdea: placementUrlIdea
}).nullable();

export type PlacementUrlIdeaServiceValue = z.infer<typeof placementUrlIdeaServiceValue>;
