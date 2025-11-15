import { z } from 'zod';

import { error } from '../../common/Error';
import { feedSetServiceReturnValue } from './FeedSetServiceReturnValue';

export const feedSetServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: feedSetServiceReturnValue,
  timeTakenSeconds: z.number().nullable()
}).nullable();

export type FeedSetServiceMutateResponse = z.infer<typeof feedSetServiceMutateResponse>;
