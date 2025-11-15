import { z } from 'zod';

export const AdGroupAdServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupAdServiceIsRemoveFlg = z.infer<typeof AdGroupAdServiceIsRemoveFlg>;
