import { z } from 'zod';

import { error } from '../../common/Error';
import { video } from './Video';

export const videoServiceValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  video: video
}).nullable();

export type VideoServiceValue = z.infer<typeof videoServiceValue>;
