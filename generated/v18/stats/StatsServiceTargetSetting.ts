import { z } from 'zod';

export const statsServiceTargetSetting = z.enum(["NONE", "ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type StatsServiceTargetSetting = z.infer<typeof statsServiceTargetSetting>;
