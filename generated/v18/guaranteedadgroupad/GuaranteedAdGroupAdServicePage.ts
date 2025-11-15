import { z } from 'zod';

import { GuaranteedAdGroupAdServiceValue } from './GuaranteedAdGroupAdServiceValue';

export const GuaranteedAdGroupAdServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(GuaranteedAdGroupAdServiceValue).nullable()
}).nullable();

export type GuaranteedAdGroupAdServicePage = z.infer<typeof GuaranteedAdGroupAdServicePage>;
