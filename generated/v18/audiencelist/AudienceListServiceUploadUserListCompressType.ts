import { z } from 'zod';

export const audienceListServiceUploadUserListCompressType = z.enum(["NONE", "ZIP", "GZIP", "UNKNOWN"]).nullable();

export type AudienceListServiceUploadUserListCompressType = z.infer<typeof audienceListServiceUploadUserListCompressType>;
