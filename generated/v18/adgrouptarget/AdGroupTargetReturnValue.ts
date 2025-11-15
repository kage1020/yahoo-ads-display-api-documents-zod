import { z } from 'zod';

import { AdGroupTargetServiceValue } from './AdGroupTargetServiceValue';

export const AdGroupTargetReturnValue = z.object({
  values: z.array(AdGroupTargetServiceValue).nullable()
}).nullable();

export type AdGroupTargetReturnValue = z.infer<typeof AdGroupTargetReturnValue>;
