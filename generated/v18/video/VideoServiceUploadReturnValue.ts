import { z } from 'zod';

import { VideoServiceUploadValue } from './VideoServiceUploadValue';

export const VideoServiceUploadReturnValue = z.object({
  values: z.array(VideoServiceUploadValue).nullable()
}).nullable();

export type VideoServiceUploadReturnValue = z.infer<typeof VideoServiceUploadReturnValue>;
