import { z } from 'zod';

import { Error } from './Error';
import { BrandLiftServicePage } from './BrandLiftServicePage';

export const BrandLiftServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: BrandLiftServicePage
}).nullable();

export type BrandLiftServiceGetResponse = z.infer<typeof BrandLiftServiceGetResponse>;
