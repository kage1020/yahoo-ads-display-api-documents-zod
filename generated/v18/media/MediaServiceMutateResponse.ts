import { z } from 'zod';

import { error } from '../../common/Error';
import { mediaServiceReturnValue } from './MediaServiceReturnValue';

export const mediaServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: mediaServiceReturnValue
}).nullable();

export type MediaServiceMutateResponse = z.infer<typeof mediaServiceMutateResponse>;
