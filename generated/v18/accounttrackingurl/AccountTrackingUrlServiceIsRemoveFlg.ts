import { z } from 'zod';

export const accountTrackingUrlServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountTrackingUrlServiceIsRemoveFlg = z.infer<typeof accountTrackingUrlServiceIsRemoveFlg>;
