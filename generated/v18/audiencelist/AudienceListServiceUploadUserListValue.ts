import { z } from 'zod';

import { error } from '../../common/Error';
import { audienceListServiceUploadUserListJob } from './AudienceListServiceUploadUserListJob';

export const audienceListServiceUploadUserListValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  uploadJob: audienceListServiceUploadUserListJob
}).nullable();

export type AudienceListServiceUploadUserListValue = z.infer<typeof audienceListServiceUploadUserListValue>;
