import { z } from 'zod';

export const AudienceListServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceIsRemoveFlg = z.infer<typeof AudienceListServiceIsRemoveFlg>;
