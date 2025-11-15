import { z } from 'zod';

export const statsServiceDeliverType = z.enum(["INCLUDE", "EXCLUDE", "UNKNOWN"]).nullable();

export type StatsServiceDeliverType = z.infer<typeof statsServiceDeliverType>;
