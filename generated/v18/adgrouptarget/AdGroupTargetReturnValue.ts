import { z } from 'zod';

import { adGroupTargetServiceValue } from './AdGroupTargetServiceValue';

export const adGroupTargetReturnValue = z.object({
  values: z.array(adGroupTargetServiceValue).nullable()
}).nullable();

export type AdGroupTargetReturnValue = z.infer<typeof adGroupTargetReturnValue>;
