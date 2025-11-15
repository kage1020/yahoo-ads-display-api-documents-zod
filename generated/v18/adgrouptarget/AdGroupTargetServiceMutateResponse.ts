import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupTargetReturnValue } from './AdGroupTargetReturnValue';

export const adGroupTargetServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupTargetReturnValue
}).nullable();

export type AdGroupTargetServiceMutateResponse = z.infer<typeof adGroupTargetServiceMutateResponse>;
