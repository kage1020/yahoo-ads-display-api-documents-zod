import { z } from 'zod';

import { Error } from './Error';
import { MediaServiceRecord } from './MediaServiceRecord';

export const MediaServiceValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  mediaRecord: MediaServiceRecord
}).nullable();

export type MediaServiceValue = z.infer<typeof MediaServiceValue>;
