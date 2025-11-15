import { z } from 'zod';

import { AdGroupTargetServiceTarget } from './AdGroupTargetServiceTarget';

export const AdGroupTarget = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  bidMultiplier: z.number().nullable(),
  campaignId: z.number().int().nullable(),
  target: AdGroupTargetServiceTarget
}).nullable();

export type AdGroupTarget = z.infer<typeof AdGroupTarget>;
