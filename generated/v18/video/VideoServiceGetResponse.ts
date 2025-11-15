import { z } from 'zod';

import { error } from '../../common/Error';
import { videoServicePage } from './VideoServicePage';

export const videoServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: videoServicePage
}).nullable();

export type VideoServiceGetResponse = z.infer<typeof videoServiceGetResponse>;
