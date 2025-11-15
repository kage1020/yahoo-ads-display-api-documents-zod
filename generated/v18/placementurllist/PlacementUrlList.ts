import { z } from 'zod';

import { PlacementUrlListServiceIsRemoveFlg } from './PlacementUrlListServiceIsRemoveFlg';
import { PlacementUrlListServiceUnknownDomainFlg } from './PlacementUrlListServiceUnknownDomainFlg';
import { PlacementUrlListServiceUrlList } from './PlacementUrlListServiceUrlList';

export const PlacementUrlList = z.object({
  accountId: z.number().int(),
  description: z.string().nullable(),
  isRemoveDescription: PlacementUrlListServiceIsRemoveFlg,
  unknownDomainFlg: PlacementUrlListServiceUnknownDomainFlg,
  urlListId: z.number().int().nullable(),
  urlListName: z.string().nullable(),
  brandSafetyDenyListFlg: z.boolean().nullable(),
  urls: z.array(PlacementUrlListServiceUrlList).nullable()
}).nullable();

export type PlacementUrlList = z.infer<typeof PlacementUrlList>;
