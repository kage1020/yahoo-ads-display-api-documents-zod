import { z } from 'zod';

import { audienceListServiceDeliveryStatus } from './AudienceListServiceDeliveryStatus';
import { audienceListServiceIsRemoveFlg } from './AudienceListServiceIsRemoveFlg';
import { audienceListServiceContent } from './AudienceListServiceContent';
import { audienceListServiceSourceType } from './AudienceListServiceSourceType';
import { audienceListServiceDataConnectionStopped } from './AudienceListServiceDataConnectionStopped';

export const audienceList = z.object({
  accountId: z.number().int().nullable(),
  deliveryStatus: audienceListServiceDeliveryStatus,
  description: z.string().nullable(),
  isRemoveDescription: audienceListServiceIsRemoveFlg,
  reach: z.number().int().nullable(),
  audienceListContent: audienceListServiceContent,
  audienceListId: z.number().int().nullable(),
  audienceListName: z.string().nullable(),
  sourceAccountId: z.number().int().nullable(),
  sourceAccountName: z.string().nullable(),
  sourceType: audienceListServiceSourceType,
  isShared: z.boolean().nullable(),
  dataConnectionStopped: audienceListServiceDataConnectionStopped
}).nullable();

export type AudienceList = z.infer<typeof audienceList>;
