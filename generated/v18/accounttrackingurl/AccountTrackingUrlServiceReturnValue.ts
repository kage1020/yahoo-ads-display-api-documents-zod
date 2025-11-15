import { z } from 'zod';

import { accountTrackingUrlServiceValue } from './AccountTrackingUrlServiceValue';

export const accountTrackingUrlServiceReturnValue = z.object({
  values: accountTrackingUrlServiceValue
}).nullable();

export type AccountTrackingUrlServiceReturnValue = z.infer<typeof accountTrackingUrlServiceReturnValue>;
