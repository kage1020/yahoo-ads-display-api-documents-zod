import { z } from 'zod';

import { AdGroupTargetServiceDeliverType } from './AdGroupTargetServiceDeliverType';

export const AdGroupTargetServiceContentsTarget = z.object({
  deliverType: AdGroupTargetServiceDeliverType,
  contentsKeywordListName: z.string().nullable()
}).nullable();

export type AdGroupTargetServiceContentsTarget = z.infer<typeof AdGroupTargetServiceContentsTarget>;
