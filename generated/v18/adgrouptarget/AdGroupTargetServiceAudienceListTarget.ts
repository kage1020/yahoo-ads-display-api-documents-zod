import { z } from 'zod';

import { AdGroupTargetServiceDeliverType } from './AdGroupTargetServiceDeliverType';
import { AdGroupTargetServiceAudienceListType } from './AdGroupTargetServiceAudienceListType';

export const AdGroupTargetServiceAudienceListTarget = z.object({
  deliverType: AdGroupTargetServiceDeliverType,
  audienceListName: z.string().nullable(),
  audienceListNameEn: z.string().nullable(),
  audienceListType: AdGroupTargetServiceAudienceListType
}).nullable();

export type AdGroupTargetServiceAudienceListTarget = z.infer<typeof AdGroupTargetServiceAudienceListTarget>;
