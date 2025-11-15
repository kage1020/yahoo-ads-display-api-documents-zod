import { z } from 'zod';

import { error } from '../../common/Error';
import { videoServiceUploadReturnValue } from './VideoServiceUploadReturnValue';

export const videoServiceUploadResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: videoServiceUploadReturnValue
}).nullable();

export type VideoServiceUploadResponse = z.infer<typeof videoServiceUploadResponse>;
