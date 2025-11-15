import { z } from 'zod';

export const statsServiceEstimateFlg = z.enum(["PAUSED", "ACTIVE", "UNKNOWN"]).nullable();

export type StatsServiceEstimateFlg = z.infer<typeof statsServiceEstimateFlg>;
