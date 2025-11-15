import { z } from 'zod';

import { Error } from './Error';
import { FeedFtpRequestServiceReturnValue } from './FeedFtpRequestServiceReturnValue';

export const FeedFtpRequestServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: FeedFtpRequestServiceReturnValue
}).nullable();

export type FeedFtpRequestServiceMutateResponse = z.infer<typeof FeedFtpRequestServiceMutateResponse>;
