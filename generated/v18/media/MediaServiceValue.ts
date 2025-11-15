import { z } from 'zod';

import { error } from '../../common/Error';
import { mediaServiceRecord } from './MediaServiceRecord';

export const mediaServiceValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  mediaRecord: mediaServiceRecord
}).nullable();

export type MediaServiceValue = z.infer<typeof mediaServiceValue>;
