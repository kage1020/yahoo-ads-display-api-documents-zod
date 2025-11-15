import { z } from 'zod';

export const adGroupServiceEligibilityFlg = z.enum(["ENABLE", "DISABLE", "UNKNOWN"]).nullable();

export type AdGroupServiceEligibilityFlg = z.infer<typeof adGroupServiceEligibilityFlg>;
