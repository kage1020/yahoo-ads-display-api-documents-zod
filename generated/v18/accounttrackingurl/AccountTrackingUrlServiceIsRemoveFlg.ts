import { z } from 'zod';

export const AccountTrackingUrlServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountTrackingUrlServiceIsRemoveFlg = z.infer<typeof AccountTrackingUrlServiceIsRemoveFlg>;
