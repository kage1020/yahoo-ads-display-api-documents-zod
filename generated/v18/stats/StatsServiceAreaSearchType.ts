import { z } from 'zod';

export const statsServiceAreaSearchType = z.enum(["GEO", "RADIUS", "UNKNOWN"]).nullable();

export type StatsServiceAreaSearchType = z.infer<typeof statsServiceAreaSearchType>;
