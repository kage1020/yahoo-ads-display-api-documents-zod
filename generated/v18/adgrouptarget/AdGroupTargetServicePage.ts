import { z } from 'zod';

import { adGroupTargetServiceValue } from './AdGroupTargetServiceValue';

export const adGroupTargetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(adGroupTargetServiceValue).nullable()
}).nullable();

export type AdGroupTargetServicePage = z.infer<typeof adGroupTargetServicePage>;
