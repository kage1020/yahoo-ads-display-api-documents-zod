import { z } from 'zod';

export const StatsServiceTargetSetting = z.enum(["NONE", "ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type StatsServiceTargetSetting = z.infer<typeof StatsServiceTargetSetting>;
