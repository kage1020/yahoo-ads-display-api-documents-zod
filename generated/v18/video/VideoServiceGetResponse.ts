import { z } from 'zod';

import { Error } from './Error';
import { VideoServicePage } from './VideoServicePage';

export const VideoServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: VideoServicePage
}).nullable();

export type VideoServiceGetResponse = z.infer<typeof VideoServiceGetResponse>;
