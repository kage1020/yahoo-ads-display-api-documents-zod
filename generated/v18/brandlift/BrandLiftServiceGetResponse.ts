import { z } from 'zod';

import { error } from '../../common/Error';
import { brandLiftServicePage } from './BrandLiftServicePage';

export const brandLiftServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: brandLiftServicePage
}).nullable();

export type BrandLiftServiceGetResponse = z.infer<typeof brandLiftServiceGetResponse>;
