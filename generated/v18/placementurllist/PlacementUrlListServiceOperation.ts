import { z } from 'zod';

import { PlacementUrlList } from './PlacementUrlList';

export const PlacementUrlListServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(PlacementUrlList)
}).nullable();

export type PlacementUrlListServiceOperation = z.infer<typeof PlacementUrlListServiceOperation>;
