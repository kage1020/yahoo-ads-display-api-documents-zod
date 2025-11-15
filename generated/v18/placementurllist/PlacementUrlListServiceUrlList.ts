import { z } from 'zod';

import { placementUrlListServiceUrlActiveFlg } from './PlacementUrlListServiceUrlActiveFlg';

export const placementUrlListServiceUrlList = z.object({
  placementUrl: z.string().nullable(),
  urlActiveFlg: placementUrlListServiceUrlActiveFlg
}).nullable();

export type PlacementUrlListServiceUrlList = z.infer<typeof placementUrlListServiceUrlList>;
