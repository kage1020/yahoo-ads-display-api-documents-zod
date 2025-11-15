import { z } from 'zod';

import { Error } from './Error';
import { GuaranteedAdGroupServicePage } from './GuaranteedAdGroupServicePage';

export const GuaranteedAdGroupServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: GuaranteedAdGroupServicePage
}).nullable();

export type GuaranteedAdGroupServiceGetResponse = z.infer<typeof GuaranteedAdGroupServiceGetResponse>;
