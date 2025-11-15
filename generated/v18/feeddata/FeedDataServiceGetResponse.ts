import { z } from 'zod';

import { error } from '../../common/Error';
import { feedDataServicePage } from './FeedDataServicePage';

export const feedDataServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: feedDataServicePage
}).nullable();

export type FeedDataServiceGetResponse = z.infer<typeof feedDataServiceGetResponse>;
