import { z } from 'zod';

import { audienceListServiceJobStatus } from './AudienceListServiceJobStatus';

export const audienceListServiceUploadUserListStatusSelector = z.object({
  accountId: z.number().int(),
  audienceListId: z.number().int().nullable(),
  numberResults: z.number().int().min(1).max(100).nullable(),
  uploadJobIds: z.array(z.string().nullable()).nullable(),
  jobStatuses: z.array(audienceListServiceJobStatus).nullable()
}).nullable();

export type AudienceListServiceUploadUserListStatusSelector = z.infer<typeof audienceListServiceUploadUserListStatusSelector>;
