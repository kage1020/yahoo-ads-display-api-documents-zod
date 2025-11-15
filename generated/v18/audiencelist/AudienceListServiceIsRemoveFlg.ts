import { z } from 'zod';

export const audienceListServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceIsRemoveFlg = z.infer<typeof audienceListServiceIsRemoveFlg>;
