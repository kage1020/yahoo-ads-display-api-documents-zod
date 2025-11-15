import { z } from 'zod';

import { Error } from './Error';
import { AudienceListServiceUploadUserListPage } from './AudienceListServiceUploadUserListPage';

export const AudienceListServiceGetUploadUserListResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AudienceListServiceUploadUserListPage
}).nullable();

export type AudienceListServiceGetUploadUserListResponse = z.infer<typeof AudienceListServiceGetUploadUserListResponse>;
