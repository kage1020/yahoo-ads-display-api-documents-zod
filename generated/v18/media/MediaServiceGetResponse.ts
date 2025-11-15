import { z } from 'zod';

import { Error } from './Error';
import { MediaServicePage } from './MediaServicePage';

export const MediaServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: MediaServicePage
}).nullable();

export type MediaServiceGetResponse = z.infer<typeof MediaServiceGetResponse>;
