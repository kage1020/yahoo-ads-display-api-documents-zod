import { z } from 'zod';

import { Error } from './Error';
import { AudienceListServiceUploadUserListReturnValue } from './AudienceListServiceUploadUserListReturnValue';

export const AudienceListServiceUploadUserListResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AudienceListServiceUploadUserListReturnValue
}).nullable();

export type AudienceListServiceUploadUserListResponse = z.infer<typeof AudienceListServiceUploadUserListResponse>;
