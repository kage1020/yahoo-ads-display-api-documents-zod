import { z } from 'zod';

export const adGroupTargetServiceTargetSetting = z.enum(["NONE", "ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceTargetSetting = z.infer<typeof adGroupTargetServiceTargetSetting>;
