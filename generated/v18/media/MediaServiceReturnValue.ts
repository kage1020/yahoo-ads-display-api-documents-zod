import { z } from 'zod';

import { mediaServiceValue } from './MediaServiceValue';

export const mediaServiceReturnValue = z.object({
  values: z.array(mediaServiceValue).nullable()
}).nullable();

export type MediaServiceReturnValue = z.infer<typeof mediaServiceReturnValue>;
