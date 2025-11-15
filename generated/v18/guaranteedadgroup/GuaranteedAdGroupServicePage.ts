import { z } from 'zod';

import { GuaranteedAdGroupServiceValue } from './GuaranteedAdGroupServiceValue';

export const GuaranteedAdGroupServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(GuaranteedAdGroupServiceValue).nullable()
}).nullable();

export type GuaranteedAdGroupServicePage = z.infer<typeof GuaranteedAdGroupServicePage>;
