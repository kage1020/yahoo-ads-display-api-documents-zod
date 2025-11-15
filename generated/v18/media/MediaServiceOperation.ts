import { z } from 'zod';

import { mediaServiceRecord } from './MediaServiceRecord';

export const mediaServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(mediaServiceRecord)
}).nullable();

export type MediaServiceOperation = z.infer<typeof mediaServiceOperation>;
