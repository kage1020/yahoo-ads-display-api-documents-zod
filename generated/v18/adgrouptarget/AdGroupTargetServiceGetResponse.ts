import { z } from 'zod';

import { Error } from './Error';
import { AdGroupTargetServicePage } from './AdGroupTargetServicePage';

export const AdGroupTargetServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupTargetServicePage
}).nullable();

export type AdGroupTargetServiceGetResponse = z.infer<typeof AdGroupTargetServiceGetResponse>;
