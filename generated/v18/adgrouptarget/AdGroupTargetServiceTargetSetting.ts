import { z } from 'zod';

export const AdGroupTargetServiceTargetSetting = z.enum(["NONE", "ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceTargetSetting = z.infer<typeof AdGroupTargetServiceTargetSetting>;
