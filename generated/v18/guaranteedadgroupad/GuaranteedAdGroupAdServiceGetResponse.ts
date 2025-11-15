import { z } from 'zod';

import { Error } from './Error';
import { GuaranteedAdGroupAdServicePage } from './GuaranteedAdGroupAdServicePage';

export const GuaranteedAdGroupAdServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: GuaranteedAdGroupAdServicePage
}).nullable();

export type GuaranteedAdGroupAdServiceGetResponse = z.infer<typeof GuaranteedAdGroupAdServiceGetResponse>;
