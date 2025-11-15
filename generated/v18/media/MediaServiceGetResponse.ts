import { z } from 'zod';

import { error } from '../../common/Error';
import { mediaServicePage } from './MediaServicePage';

export const mediaServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: mediaServicePage
}).nullable();

export type MediaServiceGetResponse = z.infer<typeof mediaServiceGetResponse>;
