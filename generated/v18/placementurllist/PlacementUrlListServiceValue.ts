import { z } from 'zod';

import { Error } from './Error';
import { PlacementUrlList } from './PlacementUrlList';

export const PlacementUrlListServiceValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  urlList: PlacementUrlList
}).nullable();

export type PlacementUrlListServiceValue = z.infer<typeof PlacementUrlListServiceValue>;
