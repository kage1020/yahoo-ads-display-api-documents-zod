import { z } from 'zod';

import { guaranteedAdGroupAdServiceValue } from './GuaranteedAdGroupAdServiceValue';

export const guaranteedAdGroupAdServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(guaranteedAdGroupAdServiceValue).nullable()
}).nullable();

export type GuaranteedAdGroupAdServicePage = z.infer<typeof guaranteedAdGroupAdServicePage>;
