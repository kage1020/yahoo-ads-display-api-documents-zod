import { z } from 'zod';

import { adGroupTargetServiceDeliverType } from './AdGroupTargetServiceDeliverType';

export const adGroupTargetServiceContentsTarget = z.object({
  deliverType: adGroupTargetServiceDeliverType,
  contentsKeywordListName: z.string().nullable()
}).nullable();

export type AdGroupTargetServiceContentsTarget = z.infer<typeof adGroupTargetServiceContentsTarget>;
