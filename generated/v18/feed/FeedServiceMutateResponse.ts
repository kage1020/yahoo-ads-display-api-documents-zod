import { z } from 'zod';

import { error } from '../../common/Error';
import { feedServiceReturnValue } from './FeedServiceReturnValue';

export const feedServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: feedServiceReturnValue
}).nullable();

export type FeedServiceMutateResponse = z.infer<typeof feedServiceMutateResponse>;
