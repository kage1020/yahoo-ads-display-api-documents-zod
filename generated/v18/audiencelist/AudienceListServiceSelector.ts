import { z } from 'zod';

import { AudienceListServiceType } from './AudienceListServiceType';
import { AudienceListServiceSharingStatusFilterType } from './AudienceListServiceSharingStatusFilterType';

export const AudienceListServiceSelector = z.object({
  accountId: z.number().int(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  audienceListIds: z.array(z.number().int().nullable()).nullable(),
  audienceListTypes: z.array(AudienceListServiceType).nullable(),
  sharingStatusFilterType: AudienceListServiceSharingStatusFilterType
}).nullable();

export type AudienceListServiceSelector = z.infer<typeof AudienceListServiceSelector>;
