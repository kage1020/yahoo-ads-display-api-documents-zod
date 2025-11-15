import { z } from 'zod';

import { MediaServiceValue } from './MediaServiceValue';

export const MediaServiceReturnValue = z.object({
  values: z.array(MediaServiceValue).nullable()
}).nullable();

export type MediaServiceReturnValue = z.infer<typeof MediaServiceReturnValue>;
