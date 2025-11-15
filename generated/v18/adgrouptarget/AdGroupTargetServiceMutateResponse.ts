import { z } from 'zod';

import { Error } from './Error';
import { AdGroupTargetReturnValue } from './AdGroupTargetReturnValue';

export const AdGroupTargetServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupTargetReturnValue
}).nullable();

export type AdGroupTargetServiceMutateResponse = z.infer<typeof AdGroupTargetServiceMutateResponse>;
