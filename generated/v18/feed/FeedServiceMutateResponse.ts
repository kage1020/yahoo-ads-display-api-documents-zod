import { z } from 'zod';

import { Error } from './Error';
import { FeedServiceReturnValue } from './FeedServiceReturnValue';

export const FeedServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: FeedServiceReturnValue
}).nullable();

export type FeedServiceMutateResponse = z.infer<typeof FeedServiceMutateResponse>;
