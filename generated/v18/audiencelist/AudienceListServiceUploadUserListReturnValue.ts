import { z } from 'zod';

import { audienceListServiceUploadUserListValue } from './AudienceListServiceUploadUserListValue';

export const audienceListServiceUploadUserListReturnValue = z.object({
  values: z.array(audienceListServiceUploadUserListValue).nullable()
}).nullable();

export type AudienceListServiceUploadUserListReturnValue = z.infer<typeof audienceListServiceUploadUserListReturnValue>;
