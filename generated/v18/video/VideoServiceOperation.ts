import { z } from 'zod';

import { Video } from './Video';

export const VideoServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(Video)
}).nullable();

export type VideoServiceOperation = z.infer<typeof VideoServiceOperation>;
