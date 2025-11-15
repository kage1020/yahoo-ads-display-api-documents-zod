import { z } from 'zod';

import { placementUrlListServiceIsRemoveFlg } from './PlacementUrlListServiceIsRemoveFlg';
import { placementUrlListServiceUnknownDomainFlg } from './PlacementUrlListServiceUnknownDomainFlg';
import { placementUrlListServiceUrlList } from './PlacementUrlListServiceUrlList';

export const placementUrlList = z.object({
  accountId: z.number().int(),
  description: z.string().nullable(),
  isRemoveDescription: placementUrlListServiceIsRemoveFlg,
  unknownDomainFlg: placementUrlListServiceUnknownDomainFlg,
  urlListId: z.number().int().nullable(),
  urlListName: z.string().nullable(),
  brandSafetyDenyListFlg: z.boolean().nullable(),
  urls: z.array(placementUrlListServiceUrlList).nullable()
}).nullable();

export type PlacementUrlList = z.infer<typeof placementUrlList>;
