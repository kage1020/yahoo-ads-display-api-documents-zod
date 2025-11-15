import { z } from 'zod';

export const StatsServiceAreaSearchType = z.enum(["GEO", "RADIUS", "UNKNOWN"]).nullable();

export type StatsServiceAreaSearchType = z.infer<typeof StatsServiceAreaSearchType>;
