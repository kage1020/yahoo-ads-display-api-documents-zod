import { z } from 'zod';

import { guaranteedAdGroupServiceValue } from './GuaranteedAdGroupServiceValue';

export const guaranteedAdGroupServiceReturnValue = z.object({
  values: z.array(guaranteedAdGroupServiceValue).nullable()
}).nullable();

export type GuaranteedAdGroupServiceReturnValue = z.infer<typeof guaranteedAdGroupServiceReturnValue>;
