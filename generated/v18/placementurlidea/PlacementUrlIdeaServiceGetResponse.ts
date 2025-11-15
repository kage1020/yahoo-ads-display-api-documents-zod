import { z } from 'zod';

import { error } from '../../common/Error';
import { placementUrlIdeaServicePage } from './PlacementUrlIdeaServicePage';

export const placementUrlIdeaServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: placementUrlIdeaServicePage
}).nullable();

export type PlacementUrlIdeaServiceGetResponse = z.infer<typeof placementUrlIdeaServiceGetResponse>;
