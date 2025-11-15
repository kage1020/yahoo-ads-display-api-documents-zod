import { z } from 'zod';

import { Error } from './Error';
import { GuaranteedAdGroupServiceReturnValue } from './GuaranteedAdGroupServiceReturnValue';

export const GuaranteedAdGroupServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: GuaranteedAdGroupServiceReturnValue
}).nullable();

export type GuaranteedAdGroupServiceMutateResponse = z.infer<typeof GuaranteedAdGroupServiceMutateResponse>;
