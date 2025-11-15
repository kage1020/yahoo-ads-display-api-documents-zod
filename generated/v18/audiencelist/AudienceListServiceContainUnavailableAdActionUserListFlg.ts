import { z } from 'zod';

export const AudienceListServiceContainUnavailableAdActionUserListFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceContainUnavailableAdActionUserListFlg = z.infer<typeof AudienceListServiceContainUnavailableAdActionUserListFlg>;
