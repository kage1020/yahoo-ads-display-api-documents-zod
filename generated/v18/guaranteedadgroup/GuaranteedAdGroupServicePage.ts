import { z } from 'zod';

import { guaranteedAdGroupServiceValue } from './GuaranteedAdGroupServiceValue';

export const guaranteedAdGroupServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(guaranteedAdGroupServiceValue).nullable()
}).nullable();

export type GuaranteedAdGroupServicePage = z.infer<typeof guaranteedAdGroupServicePage>;
