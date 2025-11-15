import { z } from 'zod';

import { videoServiceUploadValue } from './VideoServiceUploadValue';

export const videoServiceUploadReturnValue = z.object({
  values: z.array(videoServiceUploadValue).nullable()
}).nullable();

export type VideoServiceUploadReturnValue = z.infer<typeof videoServiceUploadReturnValue>;
