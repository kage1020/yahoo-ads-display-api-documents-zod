import { z } from 'zod';

import { MediaServiceRecord } from './MediaServiceRecord';

export const MediaServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(MediaServiceRecord)
}).nullable();

export type MediaServiceOperation = z.infer<typeof MediaServiceOperation>;
