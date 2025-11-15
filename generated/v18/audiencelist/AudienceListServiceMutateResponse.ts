import { z } from 'zod';

import { error } from '../../common/Error';
import { audienceListServiceReturnValue } from './AudienceListServiceReturnValue';

export const audienceListServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: audienceListServiceReturnValue
}).nullable();

export type AudienceListServiceMutateResponse = z.infer<typeof audienceListServiceMutateResponse>;
