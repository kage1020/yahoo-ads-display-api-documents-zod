import { z } from 'zod';

import { audienceListServiceUploadUserListUploadType } from './AudienceListServiceUploadUserListUploadType';
import { audienceListServiceJobStatus } from './AudienceListServiceJobStatus';
import { audienceListServiceUploadUserListUploadSource } from './AudienceListServiceUploadUserListUploadSource';

export const audienceListServiceUploadUserListJob = z.object({
  uploadJobId: z.string().nullable(),
  audienceListId: z.number().int().nullable(),
  uploadType: audienceListServiceUploadUserListUploadType,
  uploadSubmitDate: z.string().nullable(),
  receivedDate: z.string().nullable(),
  jobStatus: audienceListServiceJobStatus,
  uploadSource: audienceListServiceUploadUserListUploadSource
}).nullable();

export type AudienceListServiceUploadUserListJob = z.infer<typeof audienceListServiceUploadUserListJob>;
