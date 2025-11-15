import { z } from 'zod';

import { Error } from './Error';
import { PlacementUrlIdeaServicePage } from './PlacementUrlIdeaServicePage';

export const PlacementUrlIdeaServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: PlacementUrlIdeaServicePage
}).nullable();

export type PlacementUrlIdeaServiceGetResponse = z.infer<typeof PlacementUrlIdeaServiceGetResponse>;
