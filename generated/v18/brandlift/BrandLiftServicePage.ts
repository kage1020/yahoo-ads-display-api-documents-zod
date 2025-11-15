import { z } from 'zod';

import { brandLiftServiceValue } from './BrandLiftServiceValue';

export const brandLiftServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(brandLiftServiceValue).nullable()
}).nullable();

export type BrandLiftServicePage = z.infer<typeof brandLiftServicePage>;
