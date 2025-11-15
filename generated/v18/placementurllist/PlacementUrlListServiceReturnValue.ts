import { z } from 'zod';

import { PlacementUrlListServiceValue } from './PlacementUrlListServiceValue';

export const PlacementUrlListServiceReturnValue = z.object({
  values: z.array(PlacementUrlListServiceValue).nullable()
}).nullable();

export type PlacementUrlListServiceReturnValue = z.infer<typeof PlacementUrlListServiceReturnValue>;
