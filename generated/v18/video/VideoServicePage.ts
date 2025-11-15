import { z } from 'zod';

import { VideoServiceValue } from './VideoServiceValue';

export const VideoServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(VideoServiceValue).nullable()
}).nullable();

export type VideoServicePage = z.infer<typeof VideoServicePage>;
