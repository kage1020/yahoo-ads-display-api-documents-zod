import { z } from 'zod';

import { Error } from './Error';
import { AudienceListServiceReturnValue } from './AudienceListServiceReturnValue';

export const AudienceListServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AudienceListServiceReturnValue
}).nullable();

export type AudienceListServiceMutateResponse = z.infer<typeof AudienceListServiceMutateResponse>;
