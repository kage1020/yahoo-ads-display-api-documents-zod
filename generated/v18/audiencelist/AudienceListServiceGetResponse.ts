import { z } from 'zod';

import { error } from '../../common/Error';
import { audienceListServicePage } from './AudienceListServicePage';

export const audienceListServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: audienceListServicePage
}).nullable();

export type AudienceListServiceGetResponse = z.infer<typeof audienceListServiceGetResponse>;
