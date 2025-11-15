import { z } from 'zod';

import { error } from '../../common/Error';
import { audienceListServiceUploadUserListReturnValue } from './AudienceListServiceUploadUserListReturnValue';

export const audienceListServiceUploadUserListResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: audienceListServiceUploadUserListReturnValue
}).nullable();

export type AudienceListServiceUploadUserListResponse = z.infer<typeof audienceListServiceUploadUserListResponse>;
