import { z } from 'zod';

import { video } from './Video';

export const videoServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(video)
}).nullable();

export type VideoServiceOperation = z.infer<typeof videoServiceOperation>;
