import { z } from 'zod';

export const AudienceListServiceUploadUserListUploadType = z.enum(["IDFA", "AAID", "MAIL_ADDRESS_AND_PHONE_NUMBER", "UNKNOWN"]).nullable();

export type AudienceListServiceUploadUserListUploadType = z.infer<typeof AudienceListServiceUploadUserListUploadType>;
