import { z } from 'zod';

import { error } from '../../common/Error';
import { placementUrlListServiceReturnValue } from './PlacementUrlListServiceReturnValue';

export const placementUrlListServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: placementUrlListServiceReturnValue
}).nullable();

export type PlacementUrlListServiceMutateResponse = z.infer<typeof placementUrlListServiceMutateResponse>;
