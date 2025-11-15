import { z } from 'zod';

import { error } from '../../common/Error';
import { feedSetServicePage } from './FeedSetServicePage';

export const feedSetServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: feedSetServicePage,
  timeTakenSeconds: z.number().nullable()
}).nullable();

export type FeedSetServiceGetResponse = z.infer<typeof feedSetServiceGetResponse>;
