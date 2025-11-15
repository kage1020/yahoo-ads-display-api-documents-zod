import { z } from 'zod';

import { error } from '../../common/Error';
import { videoServiceReturnValue } from './VideoServiceReturnValue';

export const videoServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: videoServiceReturnValue
}).nullable();

export type VideoServiceMutateResponse = z.infer<typeof videoServiceMutateResponse>;
