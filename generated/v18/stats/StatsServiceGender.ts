import { z } from 'zod';

export const StatsServiceGender = z.enum(["ST_MALE", "ST_FEMALE", "ST_UNKNOWN", "UNKNOWN"]).nullable();

export type StatsServiceGender = z.infer<typeof StatsServiceGender>;
