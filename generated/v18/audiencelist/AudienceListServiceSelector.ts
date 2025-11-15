import { z } from 'zod';

import { audienceListServiceType } from './AudienceListServiceType';
import { audienceListServiceSharingStatusFilterType } from './AudienceListServiceSharingStatusFilterType';

export const audienceListServiceSelector = z.object({
  accountId: z.number().int(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  audienceListIds: z.array(z.number().int().nullable()).nullable(),
  audienceListTypes: z.array(audienceListServiceType).nullable(),
  sharingStatusFilterType: audienceListServiceSharingStatusFilterType
}).nullable();

export type AudienceListServiceSelector = z.infer<typeof audienceListServiceSelector>;
