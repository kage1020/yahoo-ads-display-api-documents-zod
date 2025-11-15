import { z } from 'zod';

import { feed } from './Feed';
import { feedServiceUploadLimit } from './FeedServiceUploadLimit';
import { error } from '../../common/Error';

export const feedServiceValue = z.object({
  feed: feed,
  uploadLimits: z.array(feedServiceUploadLimit).nullable(),
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type FeedServiceValue = z.infer<typeof feedServiceValue>;
