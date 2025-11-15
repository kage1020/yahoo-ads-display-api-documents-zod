import { z } from 'zod';

import { adGroupTargetServiceTarget } from './AdGroupTargetServiceTarget';

export const adGroupTarget = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  bidMultiplier: z.number().nullable(),
  campaignId: z.number().int().nullable(),
  target: adGroupTargetServiceTarget
}).nullable();

export type AdGroupTarget = z.infer<typeof adGroupTarget>;
