import { z } from 'zod';

export const audienceListServiceContainUnavailableAdActionUserListFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceContainUnavailableAdActionUserListFlg = z.infer<typeof audienceListServiceContainUnavailableAdActionUserListFlg>;
