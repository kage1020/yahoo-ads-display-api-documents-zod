import { z } from 'zod';

import { Error } from './Error';
import { AudienceListServiceUploadUserListJob } from './AudienceListServiceUploadUserListJob';

export const AudienceListServiceUploadUserListValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  uploadJob: AudienceListServiceUploadUserListJob
}).nullable();

export type AudienceListServiceUploadUserListValue = z.infer<typeof AudienceListServiceUploadUserListValue>;
