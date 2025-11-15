import { z } from 'zod';

import { accountTrackingUrlServiceValue } from './AccountTrackingUrlServiceValue';

export const accountTrackingUrlServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: accountTrackingUrlServiceValue
}).nullable();

export type AccountTrackingUrlServicePage = z.infer<typeof accountTrackingUrlServicePage>;
