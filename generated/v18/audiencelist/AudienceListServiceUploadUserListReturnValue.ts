import { z } from 'zod';

import { AudienceListServiceUploadUserListValue } from './AudienceListServiceUploadUserListValue';

export const AudienceListServiceUploadUserListReturnValue = z.object({
  values: z.array(AudienceListServiceUploadUserListValue).nullable()
}).nullable();

export type AudienceListServiceUploadUserListReturnValue = z.infer<typeof AudienceListServiceUploadUserListReturnValue>;
