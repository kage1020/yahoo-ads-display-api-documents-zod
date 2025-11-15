import { z } from 'zod';

export const StatsServiceEstimateFlg = z.enum(["PAUSED", "ACTIVE", "UNKNOWN"]).nullable();

export type StatsServiceEstimateFlg = z.infer<typeof StatsServiceEstimateFlg>;
