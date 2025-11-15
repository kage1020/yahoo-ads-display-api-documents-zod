import { z } from 'zod';

export const AudienceListServiceUploadUserListUploadSource = z.enum(["CAMPAIGN_MANAGEMENT_TOOL", "API", "URL_FOR_UPLOAD", "OTHER", "UNKNOWN"]).nullable();

export type AudienceListServiceUploadUserListUploadSource = z.infer<typeof AudienceListServiceUploadUserListUploadSource>;
