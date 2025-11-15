import { z } from 'zod';

import { error } from '../../common/Error';
import { retargetingTagServiceReturnValue } from './RetargetingTagServiceReturnValue';

export const retargetingTagServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: retargetingTagServiceReturnValue
}).nullable();

export type RetargetingTagServiceMutateResponse = z.infer<typeof retargetingTagServiceMutateResponse>;
