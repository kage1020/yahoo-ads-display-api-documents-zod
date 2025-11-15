import { z } from 'zod';

import { EstimatedUserSizeServiceValue } from './EstimatedUserSizeServiceValue';

export const EstimatedUserSizeServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(EstimatedUserSizeServiceValue).nullable()
}).nullable();

export type EstimatedUserSizeServicePage = z.infer<typeof EstimatedUserSizeServicePage>;
