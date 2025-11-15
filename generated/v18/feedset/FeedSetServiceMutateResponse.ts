import { z } from 'zod';

import { Error } from './Error';
import { FeedSetServiceReturnValue } from './FeedSetServiceReturnValue';

export const FeedSetServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: FeedSetServiceReturnValue,
  timeTakenSeconds: z.number().nullable()
}).nullable();

export type FeedSetServiceMutateResponse = z.infer<typeof FeedSetServiceMutateResponse>;
