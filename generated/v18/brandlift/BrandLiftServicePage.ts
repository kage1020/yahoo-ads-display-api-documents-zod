import { z } from 'zod';

import { BrandLiftServiceValue } from './BrandLiftServiceValue';

export const BrandLiftServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(BrandLiftServiceValue).nullable()
}).nullable();

export type BrandLiftServicePage = z.infer<typeof BrandLiftServicePage>;
