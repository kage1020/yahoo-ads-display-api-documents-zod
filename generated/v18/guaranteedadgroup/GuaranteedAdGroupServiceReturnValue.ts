import { z } from 'zod';

import { GuaranteedAdGroupServiceValue } from './GuaranteedAdGroupServiceValue';

export const GuaranteedAdGroupServiceReturnValue = z.object({
  values: z.array(GuaranteedAdGroupServiceValue).nullable()
}).nullable();

export type GuaranteedAdGroupServiceReturnValue = z.infer<typeof GuaranteedAdGroupServiceReturnValue>;
