import { z } from 'zod';

import { error } from '../../common/Error';
import { guaranteedAdGroupServiceReturnValue } from './GuaranteedAdGroupServiceReturnValue';

export const guaranteedAdGroupServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: guaranteedAdGroupServiceReturnValue
}).nullable();

export type GuaranteedAdGroupServiceMutateResponse = z.infer<typeof guaranteedAdGroupServiceMutateResponse>;
