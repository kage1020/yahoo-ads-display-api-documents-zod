import { z } from 'zod';

import { error } from '../../common/Error';
import { audienceListServiceUploadUserListPage } from './AudienceListServiceUploadUserListPage';

export const audienceListServiceGetUploadUserListResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: audienceListServiceUploadUserListPage
}).nullable();

export type AudienceListServiceGetUploadUserListResponse = z.infer<typeof audienceListServiceGetUploadUserListResponse>;
