import { z } from 'zod';

import { AudienceListServiceJobStatus } from './AudienceListServiceJobStatus';

export const AudienceListServiceUploadUserListStatusSelector = z.object({
  accountId: z.number().int(),
  audienceListId: z.number().int().nullable(),
  numberResults: z.number().int().min(1).max(100).nullable(),
  uploadJobIds: z.array(z.string().nullable()).nullable(),
  jobStatuses: z.array(AudienceListServiceJobStatus).nullable()
}).nullable();

export type AudienceListServiceUploadUserListStatusSelector = z.infer<typeof AudienceListServiceUploadUserListStatusSelector>;
