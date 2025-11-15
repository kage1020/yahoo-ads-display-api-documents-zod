import { z } from 'zod';

import { error } from '../../common/Error';
import { placementUrlListServicePage } from './PlacementUrlListServicePage';

export const placementUrlListServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: placementUrlListServicePage
}).nullable();

export type PlacementUrlListServiceGetResponse = z.infer<typeof placementUrlListServiceGetResponse>;
