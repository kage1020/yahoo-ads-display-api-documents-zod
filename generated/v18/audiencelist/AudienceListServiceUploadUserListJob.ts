import { z } from 'zod';

import { AudienceListServiceUploadUserListUploadType } from './AudienceListServiceUploadUserListUploadType';
import { AudienceListServiceJobStatus } from './AudienceListServiceJobStatus';
import { AudienceListServiceUploadUserListUploadSource } from './AudienceListServiceUploadUserListUploadSource';

export const AudienceListServiceUploadUserListJob = z.object({
  uploadJobId: z.string().nullable(),
  audienceListId: z.number().int().nullable(),
  uploadType: AudienceListServiceUploadUserListUploadType,
  uploadSubmitDate: z.string().nullable(),
  receivedDate: z.string().nullable(),
  jobStatus: AudienceListServiceJobStatus,
  uploadSource: AudienceListServiceUploadUserListUploadSource
}).nullable();

export type AudienceListServiceUploadUserListJob = z.infer<typeof AudienceListServiceUploadUserListJob>;
