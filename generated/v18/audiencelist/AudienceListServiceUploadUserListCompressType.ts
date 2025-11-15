import { z } from 'zod';

export const AudienceListServiceUploadUserListCompressType = z.enum(["NONE", "ZIP", "GZIP", "UNKNOWN"]).nullable();

export type AudienceListServiceUploadUserListCompressType = z.infer<typeof AudienceListServiceUploadUserListCompressType>;
