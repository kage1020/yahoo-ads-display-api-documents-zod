import { z } from 'zod';

import { AdGroupTargetServiceValue } from './AdGroupTargetServiceValue';

export const AdGroupTargetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AdGroupTargetServiceValue).nullable()
}).nullable();

export type AdGroupTargetServicePage = z.infer<typeof AdGroupTargetServicePage>;
