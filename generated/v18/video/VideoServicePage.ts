import { z } from 'zod';

import { videoServiceValue } from './VideoServiceValue';

export const videoServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(videoServiceValue).nullable()
}).nullable();

export type VideoServicePage = z.infer<typeof videoServicePage>;
