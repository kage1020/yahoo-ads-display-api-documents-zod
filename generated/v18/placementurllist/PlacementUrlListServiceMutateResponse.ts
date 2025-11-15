import { z } from 'zod';

import { Error } from './Error';
import { PlacementUrlListServiceReturnValue } from './PlacementUrlListServiceReturnValue';

export const PlacementUrlListServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: PlacementUrlListServiceReturnValue
}).nullable();

export type PlacementUrlListServiceMutateResponse = z.infer<typeof PlacementUrlListServiceMutateResponse>;
