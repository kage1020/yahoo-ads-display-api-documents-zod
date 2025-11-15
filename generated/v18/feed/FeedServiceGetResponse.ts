import { z } from 'zod';

import { error } from '../../common/Error';
import { feedServicePage } from './FeedServicePage';

export const feedServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: feedServicePage
}).nullable();

export type FeedServiceGetResponse = z.infer<typeof feedServiceGetResponse>;
