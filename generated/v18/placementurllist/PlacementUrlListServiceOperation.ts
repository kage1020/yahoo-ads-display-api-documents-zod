import { z } from 'zod';

import { placementUrlList } from './PlacementUrlList';

export const placementUrlListServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(placementUrlList)
}).nullable();

export type PlacementUrlListServiceOperation = z.infer<typeof placementUrlListServiceOperation>;
