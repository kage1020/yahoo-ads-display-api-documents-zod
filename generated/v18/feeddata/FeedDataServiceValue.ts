import { z } from 'zod';

import { error } from '../../common/Error';
import { feedDataServiceRecord } from './FeedDataServiceRecord';

export const feedDataServiceValue = z.object({
  errors: z.array(error).nullable(),
  feedData: feedDataServiceRecord,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type FeedDataServiceValue = z.infer<typeof feedDataServiceValue>;
