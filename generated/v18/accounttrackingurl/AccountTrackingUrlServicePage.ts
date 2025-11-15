import { z } from 'zod';

import { AccountTrackingUrlServiceValue } from './AccountTrackingUrlServiceValue';

export const AccountTrackingUrlServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: AccountTrackingUrlServiceValue
}).nullable();

export type AccountTrackingUrlServicePage = z.infer<typeof AccountTrackingUrlServicePage>;
