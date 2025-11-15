import { z } from 'zod';

export const adGroupAdServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupAdServiceIsRemoveFlg = z.infer<typeof adGroupAdServiceIsRemoveFlg>;
