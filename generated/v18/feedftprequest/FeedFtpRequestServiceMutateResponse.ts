import { z } from 'zod';

import { error } from '../../common/Error';
import { feedFtpRequestServiceReturnValue } from './FeedFtpRequestServiceReturnValue';

export const feedFtpRequestServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: feedFtpRequestServiceReturnValue
}).nullable();

export type FeedFtpRequestServiceMutateResponse = z.infer<typeof feedFtpRequestServiceMutateResponse>;
