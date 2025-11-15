import { z } from 'zod';

export const audienceListServiceEligibleFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceEligibleFlg = z.infer<typeof audienceListServiceEligibleFlg>;
