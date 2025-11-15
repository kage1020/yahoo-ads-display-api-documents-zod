import { z } from 'zod';

import { placementUrlListServiceValue } from './PlacementUrlListServiceValue';

export const placementUrlListServiceReturnValue = z.object({
  values: z.array(placementUrlListServiceValue).nullable()
}).nullable();

export type PlacementUrlListServiceReturnValue = z.infer<typeof placementUrlListServiceReturnValue>;
