import { z } from 'zod';

export const guaranteedAdGroupAdServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupAdServiceIsRemoveFlg = z.infer<typeof guaranteedAdGroupAdServiceIsRemoveFlg>;
