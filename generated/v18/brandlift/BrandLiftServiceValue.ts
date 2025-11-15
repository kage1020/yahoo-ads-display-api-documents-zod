import { z } from 'zod';

import { BrandLift } from './BrandLift';
import { Error } from './Error';

export const BrandLiftServiceValue = z.object({
  brandLift: BrandLift,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BrandLiftServiceValue = z.infer<typeof BrandLiftServiceValue>;
