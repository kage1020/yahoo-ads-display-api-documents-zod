import { z } from 'zod';

import { estimatedUserSizeServiceValue } from './EstimatedUserSizeServiceValue';

export const estimatedUserSizeServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(estimatedUserSizeServiceValue).nullable()
}).nullable();

export type EstimatedUserSizeServicePage = z.infer<typeof estimatedUserSizeServicePage>;
