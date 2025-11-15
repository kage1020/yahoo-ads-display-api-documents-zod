import { z } from 'zod';

import { PlacementUrlListServiceUrlActiveFlg } from './PlacementUrlListServiceUrlActiveFlg';

export const PlacementUrlListServiceUrlList = z.object({
  placementUrl: z.string().nullable(),
  urlActiveFlg: PlacementUrlListServiceUrlActiveFlg
}).nullable();

export type PlacementUrlListServiceUrlList = z.infer<typeof PlacementUrlListServiceUrlList>;
