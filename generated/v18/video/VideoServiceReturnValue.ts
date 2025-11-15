import { z } from 'zod';

import { videoServiceValue } from './VideoServiceValue';

export const videoServiceReturnValue = z.object({
  values: z.array(videoServiceValue).nullable()
}).nullable();

export type VideoServiceReturnValue = z.infer<typeof videoServiceReturnValue>;
