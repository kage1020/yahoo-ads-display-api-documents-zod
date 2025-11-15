import { z } from 'zod';

import { accountTrackingUrl } from './AccountTrackingUrl';

export const accountTrackingUrlServiceOperation = z.object({
  accountId: z.number().int(),
  operand: accountTrackingUrl
}).nullable();

export type AccountTrackingUrlServiceOperation = z.infer<typeof accountTrackingUrlServiceOperation>;
