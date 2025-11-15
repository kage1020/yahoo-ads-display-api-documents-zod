import { z } from 'zod';

export const GuaranteedAdGroupAdServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupAdServiceIsRemoveFlg = z.infer<typeof GuaranteedAdGroupAdServiceIsRemoveFlg>;
