import { z } from 'zod';

import { AudienceListServiceDeliveryStatus } from './AudienceListServiceDeliveryStatus';
import { AudienceListServiceIsRemoveFlg } from './AudienceListServiceIsRemoveFlg';
import { AudienceListServiceContent } from './AudienceListServiceContent';
import { AudienceListServiceSourceType } from './AudienceListServiceSourceType';
import { AudienceListServiceDataConnectionStopped } from './AudienceListServiceDataConnectionStopped';

export const AudienceList = z.object({
  accountId: z.number().int().nullable(),
  deliveryStatus: AudienceListServiceDeliveryStatus,
  description: z.string().nullable(),
  isRemoveDescription: AudienceListServiceIsRemoveFlg,
  reach: z.number().int().nullable(),
  audienceListContent: AudienceListServiceContent,
  audienceListId: z.number().int().nullable(),
  audienceListName: z.string().nullable(),
  sourceAccountId: z.number().int().nullable(),
  sourceAccountName: z.string().nullable(),
  sourceType: AudienceListServiceSourceType,
  isShared: z.boolean().nullable(),
  dataConnectionStopped: AudienceListServiceDataConnectionStopped
}).nullable();

export type AudienceList = z.infer<typeof AudienceList>;
