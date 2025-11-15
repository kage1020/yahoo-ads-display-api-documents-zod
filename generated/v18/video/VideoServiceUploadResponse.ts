import { z } from 'zod';

import { Error } from './Error';
import { VideoServiceUploadReturnValue } from './VideoServiceUploadReturnValue';

export const VideoServiceUploadResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: VideoServiceUploadReturnValue
}).nullable();

export type VideoServiceUploadResponse = z.infer<typeof VideoServiceUploadResponse>;
