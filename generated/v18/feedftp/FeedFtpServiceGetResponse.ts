import { z } from 'zod';

import { error } from '../../common/Error';
import { feedFtpServicePage } from './FeedFtpServicePage';

export const feedFtpServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: feedFtpServicePage,
  timeTakenSeconds: z.number().nullable()
}).nullable();

export type FeedFtpServiceGetResponse = z.infer<typeof feedFtpServiceGetResponse>;
