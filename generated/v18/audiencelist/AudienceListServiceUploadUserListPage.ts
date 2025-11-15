import { z } from 'zod';

import { audienceListServiceUploadUserListValue } from './AudienceListServiceUploadUserListValue';

export const audienceListServiceUploadUserListPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(audienceListServiceUploadUserListValue).nullable()
}).nullable();

export type AudienceListServiceUploadUserListPage = z.infer<typeof audienceListServiceUploadUserListPage>;
