import { z } from 'zod';

import { error } from '../../common/Error';
import { feedFtpServiceReturnValue } from './FeedFtpServiceReturnValue';

export const feedFtpServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: feedFtpServiceReturnValue,
  timeTakenSeconds: z.number().nullable()
}).nullable();

export type FeedFtpServiceMutateResponse = z.infer<typeof feedFtpServiceMutateResponse>;
