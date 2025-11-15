import { z } from 'zod';

import { VideoServiceValue } from './VideoServiceValue';

export const VideoServiceReturnValue = z.object({
  values: z.array(VideoServiceValue).nullable()
}).nullable();

export type VideoServiceReturnValue = z.infer<typeof VideoServiceReturnValue>;
