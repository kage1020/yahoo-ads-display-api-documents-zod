import { z } from 'zod';

import { Error } from './Error';
import { VideoServiceReturnValue } from './VideoServiceReturnValue';

export const VideoServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: VideoServiceReturnValue
}).nullable();

export type VideoServiceMutateResponse = z.infer<typeof VideoServiceMutateResponse>;
