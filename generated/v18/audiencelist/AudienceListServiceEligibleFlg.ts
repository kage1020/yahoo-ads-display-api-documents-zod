import { z } from 'zod';

export const AudienceListServiceEligibleFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceEligibleFlg = z.infer<typeof AudienceListServiceEligibleFlg>;
