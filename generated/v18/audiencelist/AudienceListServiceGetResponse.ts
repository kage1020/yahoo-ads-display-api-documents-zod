import { z } from 'zod';

import { Error } from './Error';
import { AudienceListServicePage } from './AudienceListServicePage';

export const AudienceListServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AudienceListServicePage
}).nullable();

export type AudienceListServiceGetResponse = z.infer<typeof AudienceListServiceGetResponse>;
