import { z } from 'zod';

import { Error } from './Error';
import { PlacementUrlListServicePage } from './PlacementUrlListServicePage';

export const PlacementUrlListServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: PlacementUrlListServicePage
}).nullable();

export type PlacementUrlListServiceGetResponse = z.infer<typeof PlacementUrlListServiceGetResponse>;
