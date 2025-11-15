import { z } from 'zod';

export const AdGroupServiceEligibilityFlg = z.enum(["ENABLE", "DISABLE", "UNKNOWN"]).nullable();

export type AdGroupServiceEligibilityFlg = z.infer<typeof AdGroupServiceEligibilityFlg>;
