import { z } from 'zod';

import { Error } from './Error';
import { MediaServiceReturnValue } from './MediaServiceReturnValue';

export const MediaServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: MediaServiceReturnValue
}).nullable();

export type MediaServiceMutateResponse = z.infer<typeof MediaServiceMutateResponse>;
