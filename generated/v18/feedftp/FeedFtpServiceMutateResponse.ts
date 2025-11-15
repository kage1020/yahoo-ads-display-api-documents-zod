import { z } from 'zod';

import { Error } from './Error';
import { FeedFtpServiceReturnValue } from './FeedFtpServiceReturnValue';

export const FeedFtpServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: FeedFtpServiceReturnValue,
  timeTakenSeconds: z.number().nullable()
}).nullable();

export type FeedFtpServiceMutateResponse = z.infer<typeof FeedFtpServiceMutateResponse>;
