import { z } from 'zod';

import { Error } from './Error';
import { Video } from './Video';

export const VideoServiceValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  video: Video
}).nullable();

export type VideoServiceValue = z.infer<typeof VideoServiceValue>;
