import { z } from 'zod';

import { Error } from './Error';
import { RetargetingTagServiceReturnValue } from './RetargetingTagServiceReturnValue';

export const RetargetingTagServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: RetargetingTagServiceReturnValue
}).nullable();

export type RetargetingTagServiceMutateResponse = z.infer<typeof RetargetingTagServiceMutateResponse>;
