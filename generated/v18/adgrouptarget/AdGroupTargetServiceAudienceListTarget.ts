import { z } from 'zod';

import { adGroupTargetServiceDeliverType } from './AdGroupTargetServiceDeliverType';
import { adGroupTargetServiceAudienceListType } from './AdGroupTargetServiceAudienceListType';

export const adGroupTargetServiceAudienceListTarget = z.object({
  deliverType: adGroupTargetServiceDeliverType,
  audienceListName: z.string().nullable(),
  audienceListNameEn: z.string().nullable(),
  audienceListType: adGroupTargetServiceAudienceListType
}).nullable();

export type AdGroupTargetServiceAudienceListTarget = z.infer<typeof adGroupTargetServiceAudienceListTarget>;
