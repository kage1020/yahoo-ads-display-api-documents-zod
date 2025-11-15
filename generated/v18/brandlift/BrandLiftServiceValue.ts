import { z } from 'zod';

import { brandLift } from './BrandLift';
import { error } from '../../common/Error';

export const brandLiftServiceValue = z.object({
  brandLift: brandLift,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BrandLiftServiceValue = z.infer<typeof brandLiftServiceValue>;
