import { z } from 'zod';

import { error } from '../../common/Error';
import { placementUrlList } from './PlacementUrlList';

export const placementUrlListServiceValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  urlList: placementUrlList
}).nullable();

export type PlacementUrlListServiceValue = z.infer<typeof placementUrlListServiceValue>;
