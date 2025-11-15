import { z } from 'zod';

import { AudienceListServiceUploadUserListValue } from './AudienceListServiceUploadUserListValue';

export const AudienceListServiceUploadUserListPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AudienceListServiceUploadUserListValue).nullable()
}).nullable();

export type AudienceListServiceUploadUserListPage = z.infer<typeof AudienceListServiceUploadUserListPage>;
