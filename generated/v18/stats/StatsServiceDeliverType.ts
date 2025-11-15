import { z } from 'zod';

export const StatsServiceDeliverType = z.enum(["INCLUDE", "EXCLUDE", "UNKNOWN"]).nullable();

export type StatsServiceDeliverType = z.infer<typeof StatsServiceDeliverType>;
